import {
    AbilityTrigger,
} from "./AbilityTrigger";

import {
    AbilityTriggerType,
} from "./AbilityTriggerType";

export function createPhaseStartTrigger(): AbilityTrigger {

    return {

        type: AbilityTriggerType.PhaseStart,

    };

}