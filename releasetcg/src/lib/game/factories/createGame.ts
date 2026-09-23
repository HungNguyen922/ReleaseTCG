import {
    GameState,
} from "../models";

import {
    CreateGameOptions,
} from "../models/GameOptions";

import {
    createBoard,
} from "./createBoard";

import {
    createPlayer,
} from "./createPlayer";

import {
    createPlayerPiles,
} from "./createPlayerPiles";

import {
    createSharedPiles,
} from "./createSharedPiles";

import {
    createPriorityState,
} from "./createPriorityState";

import {
    createTurnState,
} from "./createTurnState";

export function createGame(
    options: CreateGameOptions,
): GameState {

    //
    // Runtime players.
    //

    const firstPlayer = createPlayer(
        options.players[0],
    );

    const secondPlayer = createPlayer(
        options.players[1],
    );

    //
    // Player piles.
    //

    const firstPlayerPiles =
        createPlayerPiles(
            options.players[0],
        );

    const secondPlayerPiles =
        createPlayerPiles(
            options.players[1],
        );

    //
    // Shared piles.
    //

    const sharedPiles =
        createSharedPiles(

            firstPlayerPiles.remainingMainDeck,

            secondPlayerPiles.remainingMainDeck,

        );

    return {

        id: options.gameId,

        players: [

            firstPlayer,

            secondPlayer,

        ],

        board: createBoard(),

        piles: [

            ...firstPlayerPiles.piles,

            ...secondPlayerPiles.piles,

            ...sharedPiles,

        ],

        turn: createTurnState(
            options.firstPlayerId,
        ),

        priority: createPriorityState(
            options.firstPlayerId,
        ),

        winnerId: null,

    };

}