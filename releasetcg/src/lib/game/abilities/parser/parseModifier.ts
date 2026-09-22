import {

    EffectModifier,

    EffectModifierType,

    createAlwaysModifier,

} from "@/lib/game/effects";

import {

    assertObject,
    assertString,

} from "./";

export function parseModifier(
    value: unknown,
): EffectModifier {

    assertObject(

        value,

        "Modifier must be an object.",

    );

    assertString(

        value.type,

        "Modifier type missing.",

    );

    switch (

        value.type

    ) {

        case EffectModifierType.Always:

            return createAlwaysModifier();

        default:

            throw new Error(

                `Unknown modifier "${value.type}".`,

            );

    }

}