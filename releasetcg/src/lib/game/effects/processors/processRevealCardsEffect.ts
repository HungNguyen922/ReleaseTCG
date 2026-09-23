import {
    AbilityContext,
} from "@/lib/game/abilities";

import {
    RevealCardsEffect,
} from "../models/RevealCardsEffect";

export function processRevealCardsEffect(
    context: AbilityContext,
    effect: RevealCardsEffect,
): void {

    throw new Error(

        "RevealCardsEffect requires card selection.",

    );

}