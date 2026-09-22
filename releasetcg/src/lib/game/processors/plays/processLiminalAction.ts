import { EngineContext } from "@/lib/game/EngineContext";

import {
    LiminalAction,
} from "@/lib/game/actions";

import {
    createMoveCardCommand,
    createMoveGateCommand,
} from "@/lib/game/commands";

import {
    createBeginPhaseCommand,
} from "../../commands/BeginPhaseCommand";


import {
    markActionTaken,
    incrementCardsPlayedThisTurn,
} from "@/lib/game/turn";

import { TurnPhase } from "../../models";

export function processLiminalAction(
    context: EngineContext,
    action: LiminalAction,
): void {

    markActionTaken(
        context,
    );
    
    //
    // A valid Liminal always has at least one gate.
    //

    if (action.gates.length === 0) {

        throw new Error(
            "LiminalAction requires at least one gate.",
        );

    }

    //
    // Play the bridge card onto the first gate.
    //

    context.commandQueue.push(

        createMoveCardCommand(

            action.card,

            action.gates[0],

        ),

    );

    //
    // Move the growing stack through each
    // gate in the traversal path.
    //

    for (

        let i = 0;

        i < action.gates.length - 1;

        i++

    ) {

        context.commandQueue.push(

            createMoveGateCommand(

                action.gates[i],

                action.gates[i + 1],

            ),

        );

    }

    //
    // Priority returns after the entire
    // traversal has completed.
    //

    context.commandQueue.push(
    
        createBeginPhaseCommand(

            TurnPhase.Fill,

        ),

    );

    incrementCardsPlayedThisTurn(
        context,
        1,
    );

}