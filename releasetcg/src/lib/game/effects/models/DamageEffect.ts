import {
    EffectModifier,
} from "../modifiers/models/EffectModifier";

import {
    EffectType,
} from "./EffectType";

export interface DamageEffect {

    type: EffectType.Damage;

    amount: number;

    modifiers: EffectModifier[];

}