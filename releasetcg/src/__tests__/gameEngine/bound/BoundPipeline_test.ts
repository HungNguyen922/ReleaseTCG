import { processAction } from "@/lib/game/processors/processAction";

import { processCommandQueue } from "@/lib/game/processors/processCommandQueue";

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

import { TestGame } from "@/utils/test/builders/TestGame";

describe("Bound Pipeline", () => {

    it("moves every bound card onto the gate", () => {

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

        processAction(
            game.context,
            result.actions[0],
        );

        processCommandQueue(
            game.context,
        );

        const gate = findGate(

            game.context,

            game.gateReference(

                PlayerSide.Bottom,

                BoardPosition.Center,

            ),

        );

        expect(gate).not.toBeNull();

        expect(gate!.stack).not.toBeNull();

        expect(
            gate!.stack!.cards,
        ).toHaveLength(4);

        for (const card of [

            first,
            green,
            greenYellow,
            second,

        ]) {

            expect(

                findCard(

                    game.context,

                    game.reference(card),

                )!.location.locationType,

            ).toBe(

                LocationType.Gate,

            );

        }

    });

});