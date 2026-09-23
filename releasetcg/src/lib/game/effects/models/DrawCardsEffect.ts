import {
    EffectType,
} from "./EffectType";

import {
    EffectModifier,
} from "../modifiers/models/EffectModifier";

export interface DrawCardsEffect {

    type: EffectType.DrawCards;

    amount: number;

    modifiers: EffectModifier[];

}