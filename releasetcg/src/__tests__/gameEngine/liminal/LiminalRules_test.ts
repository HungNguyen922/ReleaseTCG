import {
    BoardPosition,
    CardColor,
    PlayType,
    PlayerSide,
} from "@/lib/game/models";

import { TestGame } from "@/utils/test/builders/TestGame";

describe("Liminal Rules", () => {

    it("accepts a valid liminal path", () => {

        const game = new TestGame();

        game.addGateCard({
            side: PlayerSide.Bottom,
            position: BoardPosition.Left,
            colors: [
                CardColor.Green,
                CardColor.Blue,
            ],
        });

        game.addGateCard({
            side: PlayerSide.Bottom,
            position: BoardPosition.Center,
            colors: [
                CardColor.Green,
                CardColor.Blue,
                CardColor.Yellow,
            ],
        });

        const bridge =
            game.addHandCard({

                colors: [

                    CardColor.Blue,
                    CardColor.Red,

                ],

            });

        const intent = game.playIntent(

            PlayType.Liminal,

            [
                bridge,
            ],

            [
                game.gateReference(
                    PlayerSide.Bottom,
                    BoardPosition.Left,
                ),

                game.gateReference(
                    PlayerSide.Bottom,
                    BoardPosition.Center,
                ),

            ],

        );

        const result =
            game.compilePlay(intent);

        expect(
            result.success,
        ).toBe(true);

        expect(
            result.actions,
        ).toHaveLength(1);

    });

    it("rejects non-adjacent traversal", () => {

        const game = new TestGame();

        game.addGateCard({
            side: PlayerSide.Bottom,
            position: BoardPosition.Left,
            colors: [
                CardColor.Green,
                CardColor.Blue,
            ],
        });

        game.addGateCard({
            side: PlayerSide.Top,
            position: BoardPosition.Right,
            colors: [
                CardColor.Green,
                CardColor.Blue,
            ],
        });

        const bridge =
            game.addHandCard({

                colors: [

                    CardColor.Blue,

                    CardColor.Red,

                ],

            });

        const intent =
            game.playIntent(

                PlayType.Liminal,

                [
                    bridge,
                ],

                [

                    game.gateReference(
                        PlayerSide.Bottom,
                        BoardPosition.Left,
                    ),

                    game.gateReference(
                        PlayerSide.Top,
                        BoardPosition.Right,
                    ),

                ],

            );

        const result =
            game.compilePlay(intent);

        console.log(result);
        
        expect(
            result.success,
        ).toBe(false);

    });

});