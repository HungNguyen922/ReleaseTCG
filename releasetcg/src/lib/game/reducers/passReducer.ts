import { EngineContext } from "../EngineContext";

import {
    PassCommand,
} from "../commands";

import {
    emitEvent,
} from "@/lib/game/events/emitEvent";

import {
    createPlayerPassedEvent,
} from "@/lib/game/events/state";

import {
    createGameEndedEvent,
} from "@/lib/game/events/gameplay";

export function passReducer(
    context: EngineContext,
    command: PassCommand,
): void {

    const playerId =
        context.state.turn.currentPlayerId;

    const player =
        context.state.players.find(
            player => player.id === playerId,
        );

    if (!player) {

        throw new Error(
            "PassReducer: player not found.",
        );

    }

    if (player.passesRemaining <= 0) {

        const opponent =
            context.state.players.find(
                p => p.id !== playerId,
            );

        context.state.winnerId =
            opponent?.id ?? null;

        emitEvent(
            context,
            createGameEndedEvent(
                opponent?.id ?? null,
                "outOfPasses",
            ),
        );

        return;

    }

    player.passesRemaining -= 1;

    emitEvent(
        context,
        createPlayerPassedEvent(
            playerId,
            player.passesRemaining,
        ),
    );

}