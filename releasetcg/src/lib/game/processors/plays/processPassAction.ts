import { EngineContext } from "@/lib/game/EngineContext";

import { PassAction } from "../../actions/PassAction";

import { findPlayer } from "../../queries";

import {
    createBeginPhaseCommand,
} from "../../commands/BeginPhaseCommand";

import {
    markActionTaken,
} from "@/lib/game/turn";

import { TurnPhase } from "../../models";

export function processPassAction(
    context: EngineContext,
    action: PassAction,
): void {

    const player = findPlayer(
        context,
        action.player,
    );

    if (!player) {
        throw new Error(
            "PassAction references a player that does not exist.",
        );
    }

    if (player.passesRemaining <= 0) {
        throw new Error(
            "No passes remaining.",
        );
    }

    context.commandQueue.push(
        
        createBeginPhaseCommand(

            TurnPhase.Fill,

        ),

    );

    player.passesRemaining -= 1;

    markActionTaken(context);

}