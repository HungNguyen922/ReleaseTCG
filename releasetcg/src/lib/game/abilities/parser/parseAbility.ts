import {
    Ability,
} from "../Ability";

import {
    AbilityTriggerType,
} from "../triggers/AbilityTriggerType";

import {
    createAbility,
} from "../factories";

import {
    parseEffect,
} from "./";

import {

    assertArray,
    assertObject,
    assertString,

} from "./";

export function parseAbility(
    value: unknown,
): Ability {

    assertObject(

        value,

        "Ability must be an object.",

    );

    assertObject(

        value.trigger,

        "Ability trigger missing.",

    );

    assertString(

        value.trigger.type,

        "Ability trigger type missing.",

    );

    assertArray(

        value.effects,

        "Ability effects missing.",

    );

    return createAbility(

        {

            type:

                value.trigger.type as AbilityTriggerType,

        },

        value.effects.map(

            parseEffect,

        ),

    );

}   