"use client";

import { useGame } from "../../providers/GameProvider";
import { useGameRevision } from "../../hooks/useGameRevision";
import { createEndTurnCommand } from "@/lib/game/commands";
import { processEngine } from "@/lib/game/processors/processEngine";
import { TurnPhase } from "@/lib/game/models";

export default function PhaseAdvanceButton() {
    const { engine } = useGame();
    useGameRevision();

    const phase = engine.context.state.turn.phase;

    if (phase !== TurnPhase.End) {
        return null;
    }

    function handleAdvance() {
        const currentPlayerId = engine.context.state.turn.currentPlayerId;

        engine.context.commandQueue.push(
            createEndTurnCommand({ id: currentPlayerId }),
        );
        processEngine(engine.context);
        (engine as any).notify?.();
    }

    return (
        <button
            onClick={handleAdvance}
            className="absolute bottom-4 left-[2%] rounded-lg border bg-card px-4 py-2 text-sm font-medium shadow-md hover:bg-muted"
        >
            End Turn
        </button>
    );
}