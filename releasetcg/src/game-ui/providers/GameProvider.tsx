"use client";

import {
    createContext,
    useContext,
    useState,
    useSyncExternalStore,
} from "react";

import { TestGame } from "@/utils/test/builders/TestGame";

interface GameContextValue {

    engine: TestGame;
    revision: number;
    revealP2: boolean;
    toggleRevealP2: () => void;

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

    return (

        <GameContext.Provider
            value={{
                engine,
                revision,
                revealP2,
                toggleRevealP2: () => setRevealP2(v => !v),
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