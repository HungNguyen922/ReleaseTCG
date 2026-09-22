import {
    EngineContext,
} from "@/lib/game/EngineContext";

import {
    TurnPhase,
} from "@/lib/game/models";

import {
    endTurn,
} from "./endTurn";

export function advanceTurnState(

    context: EngineContext,

): void {

    switch (

        context.state.turn.phase

    ) {

        case TurnPhase.Instant:

            context.state.turn.phase =

                TurnPhase.Action;

            return;

        case TurnPhase.Action:

            context.state.turn.phase =

                TurnPhase.Fill;

            return;

        case TurnPhase.Fill:

            context.state.turn.phase =

                TurnPhase.End;

            return;

        case TurnPhase.End:

            endTurn(

                context,

            );

            return;

    }

}