import {
    EffectModifier,
} from "../modifiers/models/EffectModifier";

import {
    EffectType,
} from "./EffectType";

export interface StackEffect {

    type: EffectType.Stack;

    amount: number;

    modifiers: EffectModifier[];

}