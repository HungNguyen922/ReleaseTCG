import { EngineContext } from "@/lib/game/EngineContext";

import {
    CardInstance,
} from "@/lib/game/models";

import {
    isPure,
    isPseudoPure,
} from "../purity";


function cardsMatchPure(
    context: EngineContext,
    a: CardInstance,
    b: CardInstance,
): boolean {

    if (

        isPure(
            context,
            a,
        )

        &&

        isPure(
            context,
            b,
        )

    ) {

        const defA =
            context.cardDatabase[a.cardId];

        const defB =
            context.cardDatabase[b.cardId];


        if (!defA || !defB) {
            return false;
        }


        return (
            defA.colors.length ===
            defB.colors.length
            &&

            defA.colors.every(
                color =>
                    defB.colors.includes(
                        color,
                    ),
            )
        );

    }


    if (

        isPseudoPure(
            context,
            a,
            b,

        )

    ) {

        return true;

    }


    return false;

}


export function validateSplit(

    context: EngineContext,

    cards: CardInstance[],

): boolean {


    if (cards.length < 2) {

        return false;

    }


    const first =
        cards[0];


    //
    // Pure split.
    //

    if (
        isPure(
            context,
            first,
        )
    ) {

        const definition =
            context.cardDatabase[
                first.cardId
            ];


        if (!definition) {
            return false;
        }


        return cards.every(card => {

            const other =
                context.cardDatabase[
                    card.cardId
                ];


            if (!other) {
                return false;
            }


            return (

                isPure(
                    context,
                    card,
                )

                &&

                other.colors.length ===
                definition.colors.length

                &&

                other.colors.every(
                    color =>
                        definition.colors.includes(
                            color,
                        ),
                )

            );

        });

    }


    //
    // Pseudopure split.
    //

    for (

        let i = 1;

        i < cards.length;

        i++

    ) {

        if (

            !isPseudoPure(

                context,

                first,

                cards[i],

            )

        ) {

            return false;

        }

    }


    return true;

}