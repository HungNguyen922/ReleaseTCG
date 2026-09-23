import {
    EngineContext,
} from "@/lib/game/EngineContext";

import {
    PlayerReference,
} from "@/lib/game/refs";

import {
    DamageResult,
} from "./DamageResult";

export function applyDamageToPlayer(

    context: EngineContext,

    target: PlayerReference,

    amount: number,

): DamageResult {

    const player =

        context.state.players.find(

            player => player.id === target.id,

        );

    if (!player) {

        throw new Error(
            "Player not found.",
        );

    }

    player.health -= amount;

    return {

        amountApplied: amount,

        prevented: 0,

        destroyed: false,

    };

}