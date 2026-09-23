import {
    AbilityTrigger,
} from "./AbilityTrigger";

import {
    AbilityTriggerType,
} from "./AbilityTriggerType";

export function createPlayTrigger(): AbilityTrigger {

    return {

        type: AbilityTriggerType.Play,

    };

}