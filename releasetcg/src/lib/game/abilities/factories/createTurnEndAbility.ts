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
    createTurnEndTrigger,
} from "../triggers";

export function createTurnEndAbility(
    ...effects: Effect[]
): Ability {

    return createAbility(

        createTurnEndTrigger(),

        effects,

    );

}