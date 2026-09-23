import {
    AbilityContext,
} from "@/lib/game/abilities";

import {
    StackEffect,
} from "../models/StackEffect";

import {
    createCardOrderingRequest,
    processCardOrderingRequest,
    processCardOrderingResponse,
} from "@/lib/game/ordering";

import {
    createPublicPileReference,
} from "@/lib/game/refs";

import {
    findTopCards,
} from "@/lib/game/queries/piles";

export function processStackEffect(

    context: AbilityContext,

    effect: StackEffect,

): void {

    //
    // Temporary:
    // Stack only works on the Public Pile.
    //

    const pile =

        createPublicPileReference();

    const cards =

        findTopCards(

            context.game,

            pile,

            effect.amount,

        );

    const request =

        createCardOrderingRequest(

            "Stack",

            `Reorder the top ${effect.amount} cards.`,

            {

                pile,

                cards: cards.map(

                    card => ({

                        id: card.id,

                    }),

                ),

                minimumCards: cards.length,

                maximumCards: cards.length,

                allowNoChange: true,

                allowRemovingCards: false,

            },

        );

    processCardOrderingRequest(

        context.game,

        request,

        response =>

            processCardOrderingResponse(

                context.game,

                request,

                response,

            ),

    );

}