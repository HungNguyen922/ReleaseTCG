import {
    DrawCardsEffect,
} from "./DrawCardsEffect";

import {
    DamageEffect,
} from "./DamageEffect";

import {
    RevealCardsEffect,
} from "./RevealCardsEffect";

import {
    StackEffect,
} from "./StackEffect";

export type Effect =

    | DrawCardsEffect

    | DamageEffect

    | RevealCardsEffect

    | StackEffect;