import {
    AbilityContext,
} from "@/lib/game/abilities";

import {
    Ability,
} from "../Ability";

import {
    processAbility,
} from "./processAbility";

export function processAbilities(
    context: AbilityContext,
    abilities: Ability[],
): void {

    for (

        const ability of abilities

    ) {

        processAbility(

            context,

            ability,

        );

    }

}