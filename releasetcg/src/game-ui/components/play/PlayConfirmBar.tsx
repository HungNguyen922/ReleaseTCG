"use client";

import { useGame } from "../../providers/GameProvider";

export default function PlayConfirmBar() {

    const {
        engine,
        activePlay,
        selectedCardIds,
        selectedDestinations,
        playError,
        clearSelection,
        confirmPlay,
    } = useGame();

    return (

        <div className="flex flex-col gap-2 rounded-lg border bg-card p-3 shadow-md">

            <div className="text-xs text-muted-foreground">
                {activePlay ?? "No play type selected"}
                {" — "}
                {selectedCardIds.length} card(s), {selectedDestinations.length} destination(s)
            </div>

            {playError && (
                <div className="text-xs font-medium text-destructive">
                    {playError}
                </div>
            )}

            <div className="flex gap-2">

                <button
                    onClick={confirmPlay}
                    className="rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground hover:opacity-90"
                >
                    Confirm Play
                </button>

                <button
                    onClick={clearSelection}
                    className="rounded-md border px-3 py-1.5 text-xs font-medium hover:bg-muted"
                >
                    Clear
                </button>

                <button
                    onClick={() => engine.endTurn()}
                    className="rounded-md border px-3 py-1.5 text-xs font-medium hover:bg-muted"
                >
                    Force End Turn
                </button>

            </div>

        </div>

    );

}