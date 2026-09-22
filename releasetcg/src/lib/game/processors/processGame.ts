import {
    EngineContext,
} from "../EngineContext";

import {
    processTurnPhase,
} from "../turn";

import {
    hasPendingInteractions,
} from "@/lib/game/interactions";

export function processGame(

    context: EngineContext,

): void {

    //
    // Never advance while waiting
    // for player input.
    //

    if (

        hasPendingInteractions(

            context,

        )

    ) {

        return;

    }

    processTurnPhase(

        context,

    );

}