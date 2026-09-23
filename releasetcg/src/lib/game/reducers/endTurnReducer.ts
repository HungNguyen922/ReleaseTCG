import { EngineContext } from "../EngineContext";

import {
    EndTurnCommand,
} from "../commands";

import {
    createBeginPhaseCommand,
} from "../commands";

import {
    emitEvent,
} from "@/lib/game/events/emitEvent";

import {
    createTurnEndedEvent,
} from "@/lib/game/events/gameplay";

import {
    TurnPhase,
} from "@/lib/game/models";

export function endTurnReducer(
    context: EngineContext,
    command: EndTurnCommand,
): void {

    const turn = context.state.turn;

    //
    // Reset per-turn counters.
    //

    turn.actionTaken = false;

    turn.setsPlayedThisTurn = 0;

    turn.cardsPlayedThisTurn = 0;

    //
    // Flip to the other player.
    //

    const nextPlayer =
        context.state.players.find(
            player => player.id !== command.player.id,
        );

    if (!nextPlayer) {

        throw new Error(
            "EndTurnReducer: no opposing player found.",
        );

    }

    turn.currentPlayerId = nextPlayer.id;

    turn.turnNumber += 1;

    emitEvent(
        context,
        createTurnEndedEvent(
            command.player,
        ),
    );

    context.commandQueue.push(

        createBeginPhaseCommand(

            TurnPhase.Instant,

        ),

    );

}