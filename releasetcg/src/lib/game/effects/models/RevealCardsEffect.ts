import {
    EffectModifier,
} from "../modifiers/models/EffectModifier";

import {
    EffectType,
} from "./EffectType";

export interface RevealCardsEffect {

    type: EffectType.RevealCards;

    amount: number;

    modifiers: EffectModifier[];

}