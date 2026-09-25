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

export type ActingPlayer = "P1" | "P2";

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

    // Who you're currently testing as. Drives both the play bar
    // and drag-and-drop, so they never disagree with each other.
    activePlayerId: ActingPlayer;
    setActivePlayerId: (id: ActingPlayer) => void;

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

    // Low-level: build + submit a play intent as the active player.
    // Used by both the confirm bar and drag-and-drop, so both paths
    // share the same validation + error handling.
    playCards: (
        playType: PlayType,
        cardIds: string[],
        destinations: LocationReference[],
    ) => void;

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

    const [activePlayerId, setActivePlayerId] =
        useState<ActingPlayer>("P1");

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

    function playCards(
        playType: PlayType,
        cardIds: string[],
        destinations: LocationReference[],
    ) {

        setPlayError(null);

        const cards: CardInstance[] = [];

        for (const id of cardIds) {

            const card = engine.card(id);

            if (!card) {
                setPlayError("One or more selected cards could not be found.");
                return;
            }

            cards.push(card);

        }

        const intent = {
            type: "play" as const,
            player: { id: activePlayerId },
            playType,
            cards: cards.map(card => ({ id: card.id })),
            destinations,
        };

        try {
            console.log("ENGINE USED BY playCards:", engine.debugId);
            engine.play(intent);
            console.log("P1 HAND AFTER PLAY:", engine.hand("P1").map(c => c.id));
            clearSelection();
        } catch (err) {
            console.error("playCards failed:", err); // ← add this
            setPlayError((err as Error).message);
        }

    }

    function confirmPlay() {

        setPlayError(null);

        if (activePlay === "pass") {

            try {
                engine.pass(activePlayerId);
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

        playCards(activePlay, selectedCardIds, selectedDestinations);

    }

    return (

        <GameContext.Provider
            value={{
                engine,
                revision,
                revealP2,
                toggleRevealP2: () => setRevealP2(v => !v),

                activePlayerId,
                setActivePlayerId,

                activePlay,
                setActivePlay,

                selectedCardIds,
                toggleCard,

                selectedDestinations,
                toggleDestination,

                playError,

                clearSelection,
                confirmPlay,
                playCards,
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