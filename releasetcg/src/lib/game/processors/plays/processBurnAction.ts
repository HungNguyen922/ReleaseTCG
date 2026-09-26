import { EngineContext } from "@/lib/game/EngineContext";

import { BurnAction } from "../../actions/BurnAction";

import {
    findCard,
} from "../../queries";

import {
    createMoveCardCommand,
} from "../../commands/MoveCardCommand";

import {
    createBeginPhaseCommand,
} from "../../commands/BeginPhaseCommand";

import {
    markActionTaken,
    incrementCardsPlayedThisTurn,
} from "@/lib/game/turn";

import { TurnPhase } from "../../models";

export function processBurnAction(
    context: EngineContext,
    action: BurnAction,
): void {

    markActionTaken(
        context,
    );

    for (const reference of action.cards) {

        const location = findCard(
            context,
            reference,
        );

        if (!location) {

            throw new Error(
                "BurnAction references a card that no longer exists.",
            );

        }

        context.commandQueue.push(

            createMoveCardCommand(

                reference,

                action.gate,

            ),

        );

    }

    context.commandQueue.push(
    
        createBeginPhaseCommand(

            TurnPhase.Fill,

        ),

    );

    incrementCardsPlayedThisTurn(context, action.cards.length);

}