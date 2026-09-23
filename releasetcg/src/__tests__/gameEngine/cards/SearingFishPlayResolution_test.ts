import {

    BoardPosition,
    CardColor,
    PlayType,
    PlayerSide,

} from "@/lib/game/models";

import {

    processAction,

} from "@/lib/game/processors";

import {

    processCommandQueue,

} from "@/lib/game/processors";

import {

    TestGame,

} from "@/utils/test/builders/TestGame";

describe(

    "Searing Fish",

    () => {

        it(

            "queues a play ability",

            () => {

                const game =

                    new TestGame();

                game.addGateCard({

                    side:
                        PlayerSide.Bottom,

                    position:
                        BoardPosition.Center,

                    colors: [

                        CardColor.Red,

                    ],

                });

                const fish =

                    game.addHandCard({

                        colors: [

                            CardColor.Red,

                        ],

                        abilities: [
                            /* Searing Fish ability */
                        ],

                    });

                const result =

                    game.compilePlay(

                        game.playIntent(

                            PlayType.Burn,

                            [fish],

                            game.gateReference(

                                PlayerSide.Bottom,

                                BoardPosition.Center,

                            ),

                        ),

                    );

                expect(
                    result.success,
                ).toBe(true);

                processAction(

                    game.context,

                    result.actions[0],

                );

                processCommandQueue(

                    game.context,

                );

                expect(

                    game.pendingResolutionCount,

                ).toBe(1);

            },

        );

    },

);