import {
    EngineContext,
} from "@/lib/game/EngineContext";

import {
    TurnPhase,
} from "@/lib/game/models";

import {
    processInstantPhase, processActionPhase, processFillPhase, processEndPhase
} from "./phases";

export function processTurnPhase(

    context: EngineContext,

): void {

    switch (

        context.state.turn.phase

    ) {

        case TurnPhase.Instant:

            processInstantPhase(

                context,

            );

            return;

        case TurnPhase.Action:

            processActionPhase(

                context,

            );

            return;

        case TurnPhase.Fill:

            processFillPhase(

                context,

            );

            return;

        case TurnPhase.End:

            processEndPhase(

                context,

            );

            return;

    }

}