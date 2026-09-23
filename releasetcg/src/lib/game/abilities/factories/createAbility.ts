import {
    Ability,
} from "../Ability";

import {
    AbilityTrigger,
} from "../triggers/AbilityTrigger";

import {
    Effect,
} from "@/lib/game/effects";

export function createAbility(
    trigger: AbilityTrigger,
    effects: Effect[],
): Ability {

    return {

        trigger,

        effects,

    };

}