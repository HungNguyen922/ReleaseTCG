import {
    Ability,
} from "../Ability";

import {
    AbilityTriggerType,
} from "../triggers/AbilityTriggerType";

export function findTriggeredAbilities(
    abilities: Ability[],
    trigger: AbilityTriggerType,
): Ability[] {

    return abilities.filter(

        ability =>

            ability.trigger.type === trigger,

    );

}