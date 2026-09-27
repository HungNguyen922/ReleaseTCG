import { EngineContext } from "@/lib/game/EngineContext";

import { ChainAction } from "../../actions/ChainAction";

import { createMoveCardCommand, createBeginAttackCommand, createBeginPhaseCommand } from "@/lib/game/commands";

import {
    markActionTaken,
    incrementCardsPlayedThisTurn,
} from "@/lib/game/turn";

import { TurnPhase } from "../../models";

export function processChainAction(

    context: EngineContext,

    action: ChainAction,

): void {

    markActionTaken(
        context,
    );

    for (

        const reference of [

            ...action.openingUnit,

            ...action.chain,

        ]

    ) {

        context.commandQueue.push(

            createMoveCardCommand(

                reference,

                action.gate,

            ),

        );

    }

    context.commandQueue.push(
        createBeginAttackCommand({ gate: action.gate }),
    );
    
    context.commandQueue.push(

        createBeginPhaseCommand(

            TurnPhase.Fill,

        ),

    );

    incrementCardsPlayedThisTurn(
        context,
        action.openingUnit.length + action.chain.length,
    );
}