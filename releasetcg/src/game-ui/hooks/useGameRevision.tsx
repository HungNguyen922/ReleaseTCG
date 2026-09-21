"use client";

import { useSyncExternalStore } from "react";

import { useGame } from "../providers/GameProvider";

export function useGameRevision() {

    const { engine } = useGame();

    return useSyncExternalStore(
        (listener) =>
            engine.subscribe(listener),

        () =>
            engine.getRevision(),

        () =>
            engine.getRevision(),
    );

}