import { compilePlayIntent } from "@/lib/game/rules/play";

import {
    BoardPosition,
    CardColor,
    PlayType,
    PlayerSide,
} from "@/lib/game/models";

import { TestGame } from "@/utils/test/builders/TestGame";

describe("Construct Rules", () => {

    it("allows two pure cards", () => {

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

        expect(result.actions).toHaveLength(1);

    });

    it("rejects occupied gates", () => {

        const game = new TestGame();

        game.addGateCard({
            side: PlayerSide.Bottom,
            position: BoardPosition.Center,
            colors: [CardColor.Red],
        });

        const a = game.addHandCard({
            colors: [CardColor.Red],
        });

        const b = game.addHandCard({
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
                    game.reference(a),
                    game.reference(b),
                ],

                destinations: [
                    game.gateReference(
                        PlayerSide.Bottom,
                        BoardPosition.Center,
                    ),
                ],
            },
        );

        expect(result.success).toBe(false);

    });

    it("rejects deck cards", () => {

        const game = new TestGame();

        game.addEmptyGate(
            PlayerSide.Bottom,
            BoardPosition.Center,
        );

        const deckCard =
            game.addDeckCard({
                colors: [CardColor.Red],
            });

        const handCard =
            game.addHandCard({
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
                    game.reference(deckCard),
                    game.reference(handCard),
                ],

                destinations: [
                    game.gateReference(
                        PlayerSide.Bottom,
                        BoardPosition.Center,
                    ),
                ],
            },
        );

        expect(result.success).toBe(false);

    });

});