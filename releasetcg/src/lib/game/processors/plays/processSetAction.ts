import { EngineContext } from "@/lib/game/EngineContext";

import { SetAction } from "../../actions/SetAction";

import {
    createMoveCardCommand,
} from "../../commands/MoveCardCommand";

import {
    incrementSetsPlayedThisTurn,
} from "@/lib/game/turn";

export function processSetAction(
    context: EngineContext,
    action: SetAction,
): void {

    for (const [index, reference] of action.cards.entries()) {

        context.commandQueue.push(
            createMoveCardCommand(
                reference,
                action.destinations[index],
            ),
        );

    }

    incrementSetsPlayedThisTurn(
        context,
        action.cards.length,
    );

}