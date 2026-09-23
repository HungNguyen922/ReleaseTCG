import { EngineContext } from "../EngineContext";

import {
    DamagePlayerCommand,
} from "../commands";

import {
    emitEvent,
} from "@/lib/game/events/emitEvent";

import {
    createPlayerDamagedEvent,
} from "@/lib/game/events/state";

export function damagePlayerReducer(
    context: EngineContext,
    command: DamagePlayerCommand,
): void {

    const player =
        context.state.players.find(
            player => player.id === command.player.id,
        );

    if (!player) {

        throw new Error(
            "DamagePlayerReducer: player not found.",
        );

    }

    player.health =
        Math.max(
            0,
            player.health - command.amount,
        );

    emitEvent(
        context,
        createPlayerDamagedEvent(
            command.player,
            command.amount,
        ),
    );

}