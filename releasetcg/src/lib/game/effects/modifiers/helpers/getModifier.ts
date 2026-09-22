import {
    EffectModifier,
} from "../models/EffectModifier";

import {
    EffectModifierType,
} from "../models/EffectModifierType";

export function getModifier<
    T extends EffectModifier,
>(

    modifiers: readonly EffectModifier[],

    type: EffectModifierType,

): T | undefined {

    return modifiers.find(

        modifier =>

            modifier.type === type,

    ) as T | undefined;

}