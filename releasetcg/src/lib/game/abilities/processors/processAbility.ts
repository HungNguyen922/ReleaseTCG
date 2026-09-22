import {
    AbilityContext,
} from "../AbilityContext";

import {
    Ability,
} from "../Ability";

import {
    processEffectWithModifiers,
} from "@/lib/game/effects/processors";

export function processAbility(
    context: AbilityContext,
    ability: Ability,
): void {

    for (

        const effect of ability.effects

    ) {

        processEffectWithModifiers(

            context,

            effect,

        );

    }

}