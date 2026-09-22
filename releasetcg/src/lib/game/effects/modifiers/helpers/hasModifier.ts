import {
    EffectModifier,
} from "../models/EffectModifier";

import {
    EffectModifierType,
} from "../models/EffectModifierType";

export function hasModifier(

    modifiers: readonly EffectModifier[],

    type: EffectModifierType,

): boolean {

    return modifiers.some(

        modifier =>

            modifier.type === type,

    );

}