import {
    CardInstance,
    PileState,
    PileType,
} from "../models";

import {
    createPublicPile,
} from "../utils";

export function createSharedPiles(

    firstRemainingMainDeck: CardInstance[],

    secondRemainingMainDeck: CardInstance[],

): PileState[] {

    return [

        {

            id: "public",

            pileType: PileType.PublicPile,

            cards: createPublicPile(

                firstRemainingMainDeck,

                secondRemainingMainDeck,

            ),

        },

        {

            id: "gap",

            pileType: PileType.Gap,

            cards: [],

        },

    ];

}