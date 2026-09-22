import {
    AbilityContext,
} from "@/lib/game/abilities";

import {
    DrawCardsEffect,
} from "../models/DrawCardsEffect";

import {
    createDrawCardsOperation,
    processOperation,
} from "@/lib/game/effects/operations";

export function processDrawCardsEffect(
    context: AbilityContext,
    effect: DrawCardsEffect,
): void {

    processOperation(

        context.game,

        createDrawCardsOperation(

            {
                id: context.source.ownerId,
            },

            effect.amount,

        ),

    );

}