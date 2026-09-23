import {
    processAction,
} from "@/lib/game/processors/processAction";

import {
    processCommandQueue,
} from "@/lib/game/processors/processCommandQueue";

import {
    findCard,
    findGate,
} from "@/lib/game/queries";

import {
    BoardPosition,
    CardColor,
    LocationType,
    PlayType,
    PlayerSide,
} from "@/lib/game/models";

import {
    TestGame,
} from "@/utils/test/builders/TestGame";


describe("Split Pipeline", () => {


    it("moves split cards onto separate gates", () => {


        const game = new TestGame();

        game.addEmptyGate(
            PlayerSide.Bottom,
            BoardPosition.Center,
        );

        game.addEmptyGate(
            PlayerSide.Top,
            BoardPosition.Center,
        );

        const red1 =
            game.addHandCard({

                colors: [
                    CardColor.Red,
                ],

            });


        const red2 =
            game.addHandCard({

                colors: [
                    CardColor.Red,
                ],

            });


        const intent =
            game.playIntent(

                PlayType.Split,

                [
                    red1,
                    red2,
                ],

                [
                    game.gateReference(
                        PlayerSide.Bottom,
                        BoardPosition.Center,
                    ),

                    game.gateReference(
                        PlayerSide.Top,
                        BoardPosition.Center,
                    ),

                ],

            );


        const result =
            game.compilePlay(
                intent,
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

            findCard(

                game.context,

                game.reference(red1),

            )!.location.locationType,

        ).toBe(

            LocationType.Gate,

        );


        expect(

            findCard(

                game.context,

                game.reference(red2),

            )!.location.locationType,

        ).toBe(

            LocationType.Gate,

        );


        expect(

            findGate(

                game.context,

                game.gateReference(

                    PlayerSide.Bottom,

                    BoardPosition.Center,

                ),

            )!.stack!.cards,

        ).toHaveLength(1);


        expect(

            findGate(

                game.context,

                game.gateReference(

                    PlayerSide.Top,

                    BoardPosition.Center,

                ),

            )!.stack!.cards,

        ).toHaveLength(1);


    });


});