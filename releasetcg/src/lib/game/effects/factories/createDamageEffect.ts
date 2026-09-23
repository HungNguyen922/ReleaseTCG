import {
    DamageEffect,
} from "../models/DamageEffect";

import {
    EffectType,
} from "../models/EffectType";

import {
    EffectModifier,
} from "../modifiers";

export function createDamageEffect(
    amount: number,
    modifiers: EffectModifier[] = [],
): DamageEffect {

    return {

        type: EffectType.Damage,

        amount,

        modifiers,

    };

}