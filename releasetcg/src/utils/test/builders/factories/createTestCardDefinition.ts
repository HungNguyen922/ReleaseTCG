import {
    CardColor,
    CardDefinition,
} from "../../../../lib/game/models";

import {
    Ability,
} from "@/lib/game/abilities";

export interface TestCardDefinitionOptions {

    id?: string;

    name?: string;

    power?: number;

    bulk?: number;

    colors?: CardColor[];

    abilities?: Ability[];

}

let nextDefinition = 1;

export function createTestCardDefinition(

    options: TestCardDefinitionOptions = {},

): CardDefinition {

    return {

        id:

            options.id ??

            `TEST_DEF_${nextDefinition++}`,

        name:

            options.name ??

            "Test Card",

        power:

            options.power ??

            0,

        bulk:

            options.bulk ??

            0,

        colors:

            options.colors ??

            [],

        trait: null,

        abilities:

            options.abilities ??

            [],

    };

}