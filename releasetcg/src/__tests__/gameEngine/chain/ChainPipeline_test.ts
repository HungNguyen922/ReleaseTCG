import { compilePlayIntent } from "@/lib/game/rules/play";

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

describe("Chain Pipeline", () => {

    it("moves every chained card onto the target gate", () => {

        const game = new TestGame();

        //
        // Existing gate containing a pure.
        //

        game.addGateCard({

            side: PlayerSide.Bottom,
            position: BoardPosition.Center,

            colors: [
                CardColor.Red,
            ],

        });

        //
        // Chain:
        //
        // Gate Red (opening pure)
        // ↓
        // Blue
        // ↓
        // Blue Green
        //

        const blue = game.addHandCard({

            colors: [
                CardColor.Blue,
            ],

        });

        const blueGreen = game.addHandCard({

            colors: [
                CardColor.Blue,
                CardColor.Green,
            ],

        });

        const result = compilePlayIntent(

            game.context,

            game.playIntent(

                PlayType.Chain,

                [
                    blue,
                    blueGreen,
                ],

                game.gateReference(

                    PlayerSide.Bottom,

                    BoardPosition.Center,

                ),

            ),

        );

        expect(result.success).toBe(true);

        expect(result.actions).toHaveLength(1);

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

        //
        // Original gate card + two chained cards.
        //

        expect(

            gate!.stack!.cards,

        ).toHaveLength(3);

        expect(

            findCard(

                game.context,

                game.reference(blue),

            )!.location.locationType,

        ).toBe(

            LocationType.Gate,

        );

        expect(

            findCard(

                game.context,

                game.reference(blueGreen),

            )!.location.locationType,

        ).toBe(

            LocationType.Gate,

        );

    });

});