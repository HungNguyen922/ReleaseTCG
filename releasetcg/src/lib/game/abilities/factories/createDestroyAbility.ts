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
    createDestroyTrigger,
} from "../triggers";

export function createDestroyAbility(
    ...effects: Effect[]
): Ability {

    return createAbility(

        createDestroyTrigger(),

        effects,

    );

}