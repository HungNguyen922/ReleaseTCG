import { EngineContext } from "@/lib/game/EngineContext";

import { BoundAction } from "@/lib/game/actions";

import { createMoveCardCommand, createBeginAttackCommand, createBeginPhaseCommand } from "@/lib/game/commands";

import {
    markActionTaken,
    incrementCardsPlayedThisTurn,
} from "@/lib/game/turn";

import { TurnPhase } from "../../models";

export function processBoundAction(

    context: EngineContext,

    action: BoundAction,

): void {

    markActionTaken(
        context,
    );
    
    //
    // Move first half.
    //

    context.commandQueue.push(

        createMoveCardCommand(

            action.firstHalf,

            action.gate,

        ),

    );

    //
    // Move middle.
    //

    for (const card of action.middle) {

        context.commandQueue.push(

            createMoveCardCommand(

                card,

                action.gate,

            ),

        );

    }

    //
    // Move second half.
    //

    context.commandQueue.push(

        createMoveCardCommand(

            action.secondHalf,

            action.gate,

        ),

    );

    //
    // Begin priority.
    //

    context.commandQueue.push(
        createBeginAttackCommand({ gate: action.gate }),
    );

    incrementCardsPlayedThisTurn(
        context,
        1 + action.middle.length + 1,
    );
}