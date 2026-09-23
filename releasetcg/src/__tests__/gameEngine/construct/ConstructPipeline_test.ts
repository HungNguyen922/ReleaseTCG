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

describe("Construct Pipeline", () => {

    it("creates a gate and moves both cards", () => {

        const game = new TestGame();

        game.addEmptyGate(
            PlayerSide.Bottom,
            BoardPosition.Center,
        );

        const cardA = game.addHandCard({
            colors: [CardColor.Red],
        });

        const cardB = game.addHandCard({
            colors: [CardColor.Blue],
        });

        const result = compilePlayIntent(
            game.context,
            {
                type: "play",

                player: {
                    id: "P1",
                },

                playType: PlayType.Construct,

                cards: [
                    game.reference(cardA),
                    game.reference(cardB),
                ],

                destinations: [
                    game.gateReference(
                        PlayerSide.Bottom,
                        BoardPosition.Center,
                    ),
                ],
            },
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

        expect(gate!.stack!.cards).toHaveLength(2);

        expect(
            findCard(
                game.context,
                game.reference(cardA),
            )!.location.locationType,
        ).toBe(LocationType.Gate);

        expect(
            findCard(
                game.context,
                game.reference(cardB),
            )!.location.locationType,
        ).toBe(LocationType.Gate);

    });

});