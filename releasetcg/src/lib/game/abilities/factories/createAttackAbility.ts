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
    createAttackTrigger,
} from "../triggers";

export function createAttackAbility(
    ...effects: Effect[]
): Ability {

    return createAbility(

        createAttackTrigger(),

        effects,

    );

}