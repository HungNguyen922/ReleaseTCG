import {
    RevealCardsEffect,
} from "../models/RevealCardsEffect";

import {
    EffectType,
} from "../models/EffectType";

import {
    EffectModifier,
} from "../modifiers";

export function createRevealCardsEffect(
    amount: number,
    modifiers: EffectModifier[] = [],
): RevealCardsEffect {

    return {

        type: EffectType.RevealCards,

        amount,

        modifiers,

    };

}