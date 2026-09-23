import { EngineContext } from "@/lib/game/EngineContext";

import {
    findPlayer,
} from "@/lib/game/queries";

import {
    createPlayerHealedEvent,
} from "@/lib/game/events/state";

import { emitEvent } from "@/lib/game/events";

import {
    HealPlayerOperation,
} from "../operations";

export function healPlayerExecutor(
    context: EngineContext,
    command: HealPlayerOperation,
): void {

    const player =
        findPlayer(
            context,
            command.player,
        );

    if (!player) {

        throw new Error(
            "Player not found.",
        );

    }

    player.health += command.amount;

    emitEvent(

        context,

        createPlayerHealedEvent(

            command.player,

            command.amount,

        ),

    );

}