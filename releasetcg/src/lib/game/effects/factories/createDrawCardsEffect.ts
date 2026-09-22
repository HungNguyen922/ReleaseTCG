import {
    DrawCardsEffect,
} from "../models/DrawCardsEffect";

import {
    EffectType,
} from "../models/EffectType";

import {
    EffectModifier,
} from "../modifiers";

export function createDrawCardsEffect(
    amount: number,
    modifiers: EffectModifier[] = [],
): DrawCardsEffect {

    return {

        type: EffectType.DrawCards,

        amount,

        modifiers,

    };

}