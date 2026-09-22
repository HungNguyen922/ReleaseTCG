import {
    AbilityTrigger,
} from "./AbilityTrigger";

import {
    AbilityTriggerType,
} from "./AbilityTriggerType";

export function createAttackTrigger(): AbilityTrigger {

    return {

        type: AbilityTriggerType.Attack,

    };

}