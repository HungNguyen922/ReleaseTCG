import { processAction } from "@/lib/game/processors/processAction";

import { processCommandQueue } from "@/lib/game/processors/processCommandQueue";

import {
    findGate,
} from "@/lib/game/queries";

import {
    BoardPosition,
    CardColor,
    PlayType,
    PlayerSide,
} from "@/lib/game/models";

import { TestGame } from "@/utils/test/builders/TestGame";

describe("Liminal Pipeline", () => {

    it("moves a gate along the liminal path", () => {

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
                        PlayerSide.Bottom,
                        BoardPosition.Center,
                    ),

                ],

            );

        const result =
            game.compilePlay(intent);

        if (!result.success) {
            console.log(result);
        }
        
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

        const source =
            findGate(

                game.context,

                game.gateReference(
                    PlayerSide.Bottom,
                    BoardPosition.Left,
                ),

            );

        const destination =
            findGate(

                game.context,

                game.gateReference(
                    PlayerSide.Bottom,
                    BoardPosition.Center,
                ),

            );

        expect(
            source!.stack,
        ).toBeNull();

        expect(
            destination!.stack,
        ).not.toBeNull();

        expect(
            destination!.stack!.cards.length,
        ).toBe(3);

    });

});