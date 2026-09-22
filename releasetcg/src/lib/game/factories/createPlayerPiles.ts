import {
    CardInstance,
    PileState,
    PileType,
} from "../models";

import {
    CreateGameOptions,
} from "../models/GameOptions";

import {
    shuffle,
    drawCards,
} from "../utils";

export interface PlayerPileBundle {

    piles: PileState[];

    remainingMainDeck: CardInstance[];

}

export function createPlayerPiles(
    player: CreateGameOptions["players"][number],
): PlayerPileBundle {

    //
    // Shuffle the main deck.
    //

    const shuffledMainDeck = shuffle(
        player.mainDeck,
    );

    //
    // Draw the opening hand.
    //

    const {

        hand,

        remainingDeck,

    } = drawCards(

        shuffledMainDeck,

        5,

    );

    return {

        piles: [

            {

                id: `${player.id}-hand`,

                ownerId: player.id,

                pileType: PileType.Hand,

                cards: hand,

            },

            {

                id: `${player.id}-main`,

                ownerId: player.id,

                pileType: PileType.MainDeck,

                cards: [],

            },

            {

                id: `${player.id}-extra`,

                ownerId: player.id,

                pileType: PileType.ExtraDeck,

                cards: [...player.extraDeck],

            },

        ],

        remainingMainDeck: remainingDeck,

    };

}