import {
    EngineContext,
} from "@/lib/game/EngineContext";

import {
    getNextPlayer,
} from "./getNextPlayer";

import {
    startTurn,
} from "./startTurn";

export function endTurn(

    context: EngineContext,

): void {

    context.state.turn.currentPlayerId =

        getNextPlayer(

            context,

            context.state.turn.currentPlayerId,

        );

    context.state.turn.turnNumber++;

    startTurn(

        context,

    );

}