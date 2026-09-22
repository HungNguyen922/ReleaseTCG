import { EngineContext } from "@/lib/game/EngineContext";

import {
    SplitAction,
} from "@/lib/game/actions";

import {
    createMoveCardCommand,
} from "@/lib/game/commands";

import {
    createBeginPhaseCommand,
} from "../../commands/BeginPhaseCommand";

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


   context.commandQueue.push(

        createBeginPhaseCommand(

            TurnPhase.Fill,

        ),

    );

    incrementCardsPlayedThisTurn(context, action.cards.length);
}