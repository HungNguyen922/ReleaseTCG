import { EngineContext } from "@/lib/game/EngineContext";

import { ConstructAction } from "@/lib/game/actions";

import { createCreateGateCommand, createMoveCardCommand, createBeginAttackCommand, createBeginPhaseCommand } from "@/lib/game/commands";

import {

    findCard,

} from "@/lib/game/queries";

import {
    markActionTaken,
    incrementCardsPlayedThisTurn,
} from "@/lib/game/turn";

import { TurnPhase } from "../../models";

export function processConstructAction(

    context: EngineContext,

    action: ConstructAction,

): void {

    markActionTaken(
        context,
    );
    
    //
    // Create the gate.
    //

    context.commandQueue.push(

        createCreateGateCommand(

            action.gate,

        ),

    );

    //
    // Move every card.
    //

    for (const reference of action.cards) {

        const location = findCard(

            context,

            reference,

        );

        if (!location) {

            throw new Error(
                "ConstructAction: card not found.",
            );

        }

        context.commandQueue.push(

            createMoveCardCommand(

                reference,

                action.gate,

            ),

        );

    }

    //
    // Begin priority.
    //

    context.commandQueue.push(
        createBeginAttackCommand({ gate: action.gate }),
    );

    incrementCardsPlayedThisTurn(context, action.cards.length);

}