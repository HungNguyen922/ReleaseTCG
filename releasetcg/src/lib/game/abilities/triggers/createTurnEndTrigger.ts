import {
    AbilityTrigger,
} from "./AbilityTrigger";

import {
    AbilityTriggerType,
} from "./AbilityTriggerType";

export function createTurnEndTrigger(): AbilityTrigger {

    return {

        type: AbilityTriggerType.TurnEnd,

    };

}