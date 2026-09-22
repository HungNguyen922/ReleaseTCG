import { EngineContext } from "@/lib/game/EngineContext";

import { CardInstance } from "@/lib/game/models";

import { cardsShareColorSet } from "../purity/cardsShareColorSet";

export function validateChain(
    context: EngineContext,
    anchor: CardInstance | undefined,
    cards: CardInstance[],
): boolean {

    //
    // No remaining cards.
    //

    if (cards.length === 0) {
        return true;
    }

    //
    // Single-pure opening.
    //
    // The opening pure simply enables
    // the chain. The chain itself
    // begins with the first remaining
    // card.
    //

    if (!anchor) {

        if (cards.length === 1) {
            return true;
        }

        for (
            let i = 1;
            i < cards.length;
            i++
        ) {

            if (

                !cardsShareColorSet(

                    context,

                    cards[i - 1],

                    cards[i],

                    1,

                )

            ) {

                return false;

            }

        }

        return true;

    }

    //
    // Pseudopure opening.
    //

    if (

        !cardsShareColorSet(

            context,

            anchor,

            cards[0],

            1,

        )

    ) {

        return false;

    }

    for (
        let i = 1;
        i < cards.length;
        i++
    ) {

        if (

            !cardsShareColorSet(

                context,

                cards[i - 1],

                cards[i],

                1,

            )

        ) {

            return false;

        }

    }

    return true;

}