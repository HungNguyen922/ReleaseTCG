import { EngineContext } from "@/lib/game/EngineContext";

import { TurnPhase } from "@/lib/game/models";

export function processEndPhase(
    context: EngineContext,
): void {

    const players =
        context.state.players;

    const current =
        players.findIndex(

            player =>
                player.id ===
                context.state.turn.currentPlayerId,

        );

    const next =

        (current + 1) %

        players.length;

    context.state.turn.currentPlayerId =
        players[next].id;

    context.state.turn.turnNumber++;

    context.state.turn.actionTaken = false;

    context.state.turn.phase =
        TurnPhase.Instant;

}