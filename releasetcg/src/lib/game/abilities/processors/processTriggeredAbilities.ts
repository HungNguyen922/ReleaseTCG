import {
    AbilityTriggerType,
} from "../triggers/AbilityTriggerType";

import {
    AbilityContext,
} from "../AbilityContext";

import {
    findCardDefinition,
} from "@/lib/game/queries/lookup";

import {
    findTriggeredAbilities,
} from "../queries/findTriggeredAbilities";

import {
    processAbility,
} from "./processAbility";

export function processTriggeredAbilities(

    context: AbilityContext,

    trigger: AbilityTriggerType,

): void {

    const definition =

        findCardDefinition(

            context.game,

            context.source,

        );

    const abilities =

        findTriggeredAbilities(

            definition.abilities,

            trigger,

        );

    for (

        const ability of abilities

    ) {

        processAbility(

            context,

            ability,

        );

    }

}