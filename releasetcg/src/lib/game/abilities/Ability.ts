import {
    Effect,
} from "../effects";

import {
    AbilityTrigger,
} from "./triggers/AbilityTrigger";

export interface Ability {

    trigger: AbilityTrigger;

    effects: Effect[];

}