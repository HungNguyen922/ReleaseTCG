import {
    AlwaysModifier,
} from "../models/AlwaysModifier";

import {
    EffectModifierType,
} from "../models/EffectModifierType";

export function createAlwaysModifier(): AlwaysModifier {

    return {

        type: EffectModifierType.Always,

    };

}