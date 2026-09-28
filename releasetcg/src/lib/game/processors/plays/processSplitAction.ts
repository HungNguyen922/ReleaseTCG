import { EngineContext } from "@/lib/game/EngineContext";

import {
    SplitAction,
} from "@/lib/game/actions";

import { createMoveCardCommand, createBeginAttackCommand, createBeginPhaseCommand } from "@/lib/game/commands";

import {
    markActionTaken,
    incrementCardsPlayedThisTurn,
} from "@/lib/game/turn";

import { TurnPhase } from "../../models";

export function processSplitAction(

    context: EngineContext,

    action: SplitAction,

): void {

    markActionTaken(
        context,
    );
    
    for (

        let i = 0;

        i < action.cards.length;

        i++

    ) {


        context.commandQueue.push(

            createMoveCardCommand(

                action.cards[i],

                action.gates[i],

            ),

        );

    }

    for (const gate of action.gates) {
        context.commandQueue.push(
            createBeginAttackCommand({ gate }),
        );
    }

    incrementCardsPlayedThisTurn(context, action.cards.length);
}