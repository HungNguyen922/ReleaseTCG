/*

    Effects declare what actions have to get done.
    Operations carry these effects out.

*/
import {
    AbilityContext,
} from "@/lib/game/abilities";

import {
    Effect,
    EffectType,
} from "..";

import {
    processDrawCardsEffect,
} from "./processDrawCardsEffect";

import {
    processDamageEffect,
} from "./processDamageEffect";

import {
    processRevealCardsEffect,
} from "./processRevealCardsEffect";

export function processEffect(
    context: AbilityContext,
    effect: Effect,
): void {

    switch (

        effect.type

    ) {

        case EffectType.DrawCards:

            processDrawCardsEffect(
                context,
                effect,
            );

            return;

        case EffectType.Damage:

            processDamageEffect(
                context,
                effect,
            );

            return;

        case EffectType.RevealCards:

            processRevealCardsEffect(
                context,
                effect,
            );

            return;

    }

}