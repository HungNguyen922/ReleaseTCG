import {
    EngineContext,
} from "@/lib/game/EngineContext";

import {
    CardInstance,
} from "@/lib/game/models";

import {
    PileReference,
} from "@/lib/game/refs";

import {
    findPile,
} from "@/lib/game/queries";

export function applyCardOrdering(

    context: EngineContext,

    pile: PileReference,

    orderedCards: CardInstance[],

): void {

    const targetPile =

        findPile(

            context,

            pile,

        );

    if (!targetPile) {

        throw new Error(

            "Pile not found.",

        );

    }

    //
    // Remove reordered cards.
    //

    targetPile.cards = targetPile.cards.filter(

        card =>

            !orderedCards.some(

                ordered =>

                    ordered.id === card.id,

            ),

    );

    //
    // Put reordered cards back on top.
    //

    targetPile.cards.unshift(

        ...orderedCards,

    );

}