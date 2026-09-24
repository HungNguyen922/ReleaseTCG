import { EngineContext } from "@/lib/game/EngineContext";

import { PassAction } from "../../actions/PassAction";

import { findPlayer } from "../../queries";

import { markActionTaken } from "@/lib/game/turn";

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

    player.passesRemaining -= 1;

    markActionTaken(context);

}