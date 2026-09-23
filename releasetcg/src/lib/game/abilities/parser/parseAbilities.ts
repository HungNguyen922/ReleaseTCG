import {
    Ability,
} from "../Ability";

import {
    parseAbility,
} from "./";

import {
    assertArray,
} from "./";

export function parseAbilities(
    value: unknown,
): Ability[] {

    assertArray(

        value,

        "Abilities must be an array.",

    );

    return value.map(

        parseAbility,

    );

}