import {
    Ability,
} from "../Ability";

import {
    Effect,
} from "@/lib/game/effects";

import {
    createAbility,
} from "./createAbility";

import {
    createPhaseStartTrigger,
} from "../triggers";

export function createPhaseStartAbility(
    ...effects: Effect[]
): Ability {

    return createAbility(

        createPhaseStartTrigger(),

        effects,

    );

}