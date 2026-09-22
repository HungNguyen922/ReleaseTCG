import {
    StackEffect,
} from "../models/StackEffect";

import {
    EffectModifier,
} from "../modifiers/models/EffectModifier";

import {
    EffectType,
} from "../models/EffectType";

export function createStackEffect(

    amount: number,

    modifiers: EffectModifier[] = [],

): StackEffect {

    return {

        type: EffectType.Stack,

        amount,

        modifiers,

    };

}