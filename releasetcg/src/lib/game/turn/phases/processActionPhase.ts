import { EngineContext } from "@/lib/game/EngineContext";

import { TurnPhase } from "@/lib/game/models";

export function processActionPhase(
    context: EngineContext,
): void {

    //
    // Stay in Action until
    // the player submits a play.
    //

    if (

        !context.state.turn.actionTaken

    ) {

        return;

    }

    context.state.turn.phase =
        TurnPhase.Fill;

}