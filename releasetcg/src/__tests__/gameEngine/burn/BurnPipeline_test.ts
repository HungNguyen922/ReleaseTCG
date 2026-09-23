import { TestGame } from "@/utils/test/builders/TestGame";

import { compilePlayIntent } from "@/lib/game/rules/play";

import { processAction } from "@/lib/game/processors/processAction";

import { processCommandQueue } from "@/lib/game/processors/processCommandQueue";

import { findCard } from "@/lib/game/queries";

import {
    BoardPosition,
    CardColor,
    LocationType,
    PlayType,
    PlayerSide,
} from "@/lib/game/models";

import { PlayIntent } from "@/lib/game/intents";

describe("Burn Pipeline", () => {

    it("moves the played card onto the target gate", () => {

        const game = new TestGame();

        const handCard = game.addHandCard({
            colors: [CardColor.Red],
        });

        game.addGateCard({
            side: PlayerSide.Bottom,
            position: BoardPosition.Center,
            colors: [CardColor.Red],
        });

        const intent: PlayIntent = {

            type: "play",

            player: {
                id: "P1",
            },

            playType: PlayType.Burn,

            cards: [
                {
                    id: handCard.id,
                },
            ],

            destinations: [
                {
                    locationType: LocationType.Gate,
                    side: PlayerSide.Bottom,
                    position: BoardPosition.Center,
                },
            ],

        };

        const result = compilePlayIntent(
            game.context,
            intent,
        );

        expect(result.success).toBe(true);

        for (const action of result.actions) {

            processAction(
                game.context,
                action,
            );

        }

        processCommandQueue(
            game.context,
        );

        const location = findCard(
            game.context,
            {
                id: handCard.id,
            },
        );

        expect(location).not.toBeNull();

        expect(
            location!.location.locationType,
        ).toBe(LocationType.Gate);

        expect(
            game.context.commandQueue,
        ).toHaveLength(0);

    });

});