import {
    EngineContext,
} from "@/lib/game/EngineContext";

import {
    TargetType,
    Target,
    PlayerTarget,
    CardTarget,
} from "@/lib/game/targeting/models";

import {
    DamageResult,
} from "./DamageResult";

import {
    applyDamageToPlayer,
} from "./applyDamageToPlayer";

import {
    applyDamageToCard,
} from "./applyDamageToCard";

import { DamageTarget } from "./DamageTarget";

export function applyDamage(

    context: EngineContext,

    target: DamageTarget,

    amount: number,

): DamageResult {

    switch (

        target.type

    ) {

        case TargetType.Player:

            return applyDamageToPlayer(

                context,

                (target as PlayerTarget).reference,

                amount,

            );

        case TargetType.Card:

            return applyDamageToCard(

                context,

                (target as CardTarget).reference,

                amount,

            );

        default:

            throw new Error(

                `Target type '${target}' cannot receive damage.`,

            );

    }

}