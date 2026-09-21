import {
    GameState,
    PlayerState,
    TurnState,
    PriorityState,
    BoardState,
    CardInstance,
    PileType,
} from "../../../../lib/game/models";

import {
    createTestPile,
} from "./createTestPile";

import {
    createTestCardInstance,
} from "./createTestCardInstance";

export interface TestPlayerConfig {

    hand?: CardInstance[];

    deck?: CardInstance[];

    discard?: CardInstance[];

    health?: number;

}

export interface TestGameStateConfig {

    playerOne?: TestPlayerConfig;

    playerTwo?: TestPlayerConfig;

}

export function createTestGameState(
    config: TestGameStateConfig = {},
): GameState {

    const playerOneLeader =

        createTestCardInstance(
            "leader-p1",
            "P1",
        );

    const playerTwoLeader =

        createTestCardInstance(
            "leader-p2",
            "P2",
        );

    const players: PlayerState[] = [

        {

            id: "P1",

            health:

                config.playerOne?.health ??

                20,

            leader:

                playerOneLeader,

            leaderDrawn: true,

        },

        {

            id: "P2",

            health:

                config.playerTwo?.health ??

                20,

            leader:

                playerTwoLeader,

            leaderDrawn: true,

        },

    ];

    return {

        id: "TEST",

        players,

        board: {

            top: [],

            bottom: [],

        } as BoardState,

        piles: [

            createTestPile(

                PileType.Hand,

                config.playerOne?.hand ?? [],

                "P1",

            ),

            createTestPile(

                PileType.MainDeck,

                config.playerOne?.deck ?? [],

                "P1",

            ),

            createTestPile(

                PileType.Discard,

                config.playerOne?.discard ?? [],

                "P1",

            ),

            createTestPile(

                PileType.Hand,

                config.playerTwo?.hand ?? [],

                "P2",

            ),

            createTestPile(

                PileType.MainDeck,

                config.playerTwo?.deck ?? [],

                "P2",

            ),

            createTestPile(

                PileType.Discard,

                config.playerTwo?.discard ?? [],

                "P2",

            ),

        ],

        turn: {} as TurnState,

        priority: {} as PriorityState,

        winnerId: null,

    };

}