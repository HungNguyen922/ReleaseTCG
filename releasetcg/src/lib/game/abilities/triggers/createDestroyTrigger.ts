import {
    AbilityTrigger,
} from "./AbilityTrigger";

import {
    AbilityTriggerType,
} from "./AbilityTriggerType";

export function createDestroyTrigger(): AbilityTrigger {

    return {

        type: AbilityTriggerType.Destroy,

    };

}