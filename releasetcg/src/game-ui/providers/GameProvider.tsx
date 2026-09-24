"use client";

import {
    createContext,
    useContext,
    useState,
    useSyncExternalStore,
} from "react";

import { TestGame } from "@/utils/test/builders/TestGame";

import { CardInstance, PlayType } from "@/lib/game/models";

import { LocationReference } from "@/lib/game/refs";

export type ActivePlay = PlayType | "pass";

export function locationRefsEqual(
    a: LocationReference,
    b: LocationReference,
): boolean {

    return JSON.stringify(a) === JSON.stringify(b);

}

interface GameContextValue {

    engine: TestGame;
    revision: number;
    revealP2: boolean;
    toggleRevealP2: () => void;

    // Play builder
    activePlay: ActivePlay | null;
    setActivePlay: (play: ActivePlay | null) => void;

    selectedCardIds: string[];
    toggleCard: (cardId: string) => void;

    selectedDestinations: LocationReference[];
    toggleDestination: (ref: LocationReference) => void;

    playError: string | null;

    clearSelection: () => void;
    confirmPlay: () => void;

}

const GameContext =
    createContext<GameContextValue | null>(
        null,
    );

interface Props {

    engine: TestGame;

    children: React.ReactNode;

}

export function GameProvider({
    engine,
    children,
}: Props) {

    const revision = useSyncExternalStore(
        engine.subscribe.bind(engine),
        () => engine.getRevision(),
        () => engine.getRevision(),
    );

    const [revealP2, setRevealP2] =
        useState(false);

    const [activePlay, setActivePlay] =
        useState<ActivePlay | null>(null);

    const [selectedCardIds, setSelectedCardIds] =
        useState<string[]>([]);

    const [selectedDestinations, setSelectedDestinations] =
        useState<LocationReference[]>([]);

    const [playError, setPlayError] =
        useState<string | null>(null);

    function toggleCard(cardId: string) {

        setPlayError(null);

        setSelectedCardIds(current =>
            current.includes(cardId)
                ? current.filter(id => id !== cardId)
                : [...current, cardId],
        );

    }

    function toggleDestination(ref: LocationReference) {

        setPlayError(null);

        setSelectedDestinations(current =>
            current.some(existing => locationRefsEqual(existing, ref))
                ? current.filter(existing => !locationRefsEqual(existing, ref))
                : [...current, ref],
        );

    }

    function clearSelection() {

        setActivePlay(null);
        setSelectedCardIds([]);
        setSelectedDestinations([]);
        setPlayError(null);

    }

    function confirmPlay() {

        setPlayError(null);

        if (activePlay === "pass") {

            try {
                engine.pass();
                clearSelection();
            } catch (err) {
                setPlayError((err as Error).message);
            }

            return;

        }

        if (!activePlay) {
            setPlayError("Choose a play type first.");
            return;
        }

        const cards: CardInstance[] = [];

        for (const id of selectedCardIds) {

            const card = engine.card(id);

            if (!card) {
                setPlayError("One or more selected cards could not be found.");
                return;
            }

            cards.push(card);

        }

        const intent = engine.playIntent(
            activePlay,
            cards,
            selectedDestinations,
        );

        try {
            engine.play(intent);
            clearSelection();
        } catch (err) {
            setPlayError((err as Error).message);
        }

    }

    return (

        <GameContext.Provider
            value={{
                engine,
                revision,
                revealP2,
                toggleRevealP2: () => setRevealP2(v => !v),

                activePlay,
                setActivePlay,

                selectedCardIds,
                toggleCard,

                selectedDestinations,
                toggleDestination,

                playError,

                clearSelection,
                confirmPlay,
            }}
        >

            {children}

        </GameContext.Provider>

    );

}

export function useGame() {

    const context =
        useContext(
            GameContext,
        );

    if (!context) {

        throw new Error(
            "useGame must be used inside GameProvider.",
        );

    }

    return context;

}