import {
    AbilityContext,
} from "@/lib/game/abilities";

import {
    DamageEffect,
} from "../models/DamageEffect";

import {
    createDamageTargetRequest,
} from "@/lib/game/targeting/requests";

import {
    processTargetRequest,
} from "@/lib/game/targeting";

import { applyDamage } from "@/lib/game/damage";

export function processDamageEffect(

    context: AbilityContext,

    effect: DamageEffect,

): void {

    const request =

        createDamageTargetRequest({

            engine: context.game,

            sourcePlayerId:
                context.source.controllerId,

            sourceCard: {

                id: context.source.id,

            },

            sourceEffect: effect,

        });

    processTargetRequest(

        context.game,

        request,

        target =>

            applyDamage(

                context.game,

                target,

                effect.amount,

            ),

    );

}