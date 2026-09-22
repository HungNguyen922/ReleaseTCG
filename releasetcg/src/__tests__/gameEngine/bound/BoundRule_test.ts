import {
    BoardPosition,
    CardColor,
    PlayType,
    PlayerSide,
} from "@/lib/game/models";

import { TestGame } from "@/utils/test/builders/TestGame";

describe("Bound Rules", () => {

    it("accepts a bound built entirely from hand", () => {

        const game = new TestGame();

        game.addEmptyGate(
            PlayerSide.Bottom,
            BoardPosition.Center,
        );

        const first = game.addHandCard({

            colors: [
                CardColor.Green,
                CardColor.Blue,
            ],

        });

        const green = game.addHandCard({

            colors: [
                CardColor.Green,
            ],

        });

        const greenYellow = game.addHandCard({

            colors: [
                CardColor.Green,
                CardColor.Yellow,
            ],

        });

        const second = game.addHandCard({

            colors: [
                CardColor.Green,
                CardColor.Blue,
            ],

        });

        const result = game.compilePlay(

            game.playIntent(

                PlayType.Bound,

                [
                    first,
                    green,
                    greenYellow,
                    second,
                ],

                game.gateReference(
                    PlayerSide.Bottom,
                    BoardPosition.Center,
                ),

            ),

        );

        expect(result.success).toBe(true);

        expect(result.actions).toHaveLength(1);

    });

    it("accepts a bound using a gate card as the first half", () => {

        const game = new TestGame();

        game.addGateCard({

            side: PlayerSide.Bottom,
            position: BoardPosition.Center,

            colors: [
                CardColor.Red,
                CardColor.Yellow,
            ],

        });

        const redBlue = game.addHandCard({

            colors: [
                CardColor.Red,
                CardColor.Blue,
            ],

        });

        const redOrange = game.addHandCard({

            colors: [
                CardColor.Red,
                CardColor.Orange,
            ],

        });

        const redYellow = game.addHandCard({

            colors: [
                CardColor.Red,
                CardColor.Yellow,
            ],

        });

        const result = game.compilePlay(

            game.playIntent(

                PlayType.Bound,

                [
                    redBlue,
                    redOrange,
                    redYellow,
                ],

                game.gateReference(
                    PlayerSide.Bottom,
                    BoardPosition.Center,
                ),

            ),

        );

        expect(result.success).toBe(true);

    });

    it("rejects a broken corridor", () => {

        const game = new TestGame();

        game.addEmptyGate(
            PlayerSide.Bottom,
            BoardPosition.Center,
        );

        const first = game.addHandCard({

            colors: [
                CardColor.Pink,
                CardColor.Yellow,
            ],

        });

        const pinkBlue = game.addHandCard({

            colors: [
                CardColor.Pink,
                CardColor.Blue,
            ],

        });

        const blueYellow = game.addHandCard({

            colors: [
                CardColor.Blue,
                CardColor.Yellow,
            ],

        });

        const pinkRed = game.addHandCard({

            colors: [
                CardColor.Pink,
                CardColor.Red,
            ],

        });

        const second = game.addHandCard({

            colors: [
                CardColor.Pink,
                CardColor.Yellow,
            ],

        });

        const result = game.compilePlay(

            game.playIntent(

                PlayType.Bound,

                [
                    first,
                    pinkBlue,
                    blueYellow,
                    pinkRed,
                    second,
                ],

                game.gateReference(
                    PlayerSide.Bottom,
                    BoardPosition.Center,
                ),

            ),

        );

        expect(result.success).toBe(false);

    });

});