import {
    EngineContext,
} from "@/lib/game/EngineContext";

import {
    TurnPhase,
} from "@/lib/game/models";

export function startTurn(

    context: EngineContext,

): void {

    context.state.turn.phase =

        TurnPhase.Instant;

}