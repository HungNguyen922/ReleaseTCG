"use client";

import { useGame } from "../../providers/GameProvider";

import { useGameRevision } from "../../hooks/useGameRevision";

import { createBeginPhaseCommand } from "@/lib/game/commands";

import { processCommand } from "@/lib/game/processors/processCommand";

import { processEngine } from "@/lib/game/engine/processEngine";

import { TurnPhase } from "@/lib/game/models";

export default function PhaseAdvanceButton() {

    const { engine } = useGame();

    useGameRevision();

    const phase =
        engine.context.state.turn.phase;

    if (
        phase !== TurnPhase.Instant &&
        phase !== TurnPhase.End
    ) {
        return null;
    }

    function handleAdvance() {

        const nextPhase =
            phase === TurnPhase.Instant
                ? TurnPhase.Action
                : TurnPhase.Instant;

        engine.context.commandQueue.push(
            createBeginPhaseCommand(
                nextPhase,
            ),
        );

        processEngine(
            engine.context,
        );

        (engine as any).notify?.();

    }

    return (

        <button
            onClick={handleAdvance}
            className="absolute bottom-4 left-[2%] rounded-lg border bg-card px-4 py-2 text-sm font-medium shadow-md hover:bg-muted"
        >

            {
                phase === TurnPhase.Instant
                    ? "Begin Action Phase"
                    : "End Turn"
            }

        </button>

    );

}