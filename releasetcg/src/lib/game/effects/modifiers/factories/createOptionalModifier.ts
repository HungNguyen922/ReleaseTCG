import {
    OptionalModifier,
} from "../models/OptionalModifier";

import {
    EffectModifierType,
} from "../models";

export function createOptionalModifier(

    message: string,

): OptionalModifier {

    return {

        type: EffectModifierType.Optional,

        message,

    };

}