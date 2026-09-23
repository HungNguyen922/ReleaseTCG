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
    createPlayTrigger,
} from "../triggers";

export function createPlayAbility(
    ...effects: Effect[]
): Ability {

    return createAbility(

        createPlayTrigger(),

        effects,

    );

}