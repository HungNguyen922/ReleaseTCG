import { TestGame } from "@/utils/test/builders/TestGame";

import { compilePlayIntent } from "@/lib/game/rules/play";

import {
    ActionType,
} from "@/lib/game/actions";

import {
    BoardPosition,
    CardColor,
    LocationType,
    PlayType,
    PlayerSide,
} from "@/lib/game/models";

import { PlayIntent } from "@/lib/game/intents";

describe("compileBurn", () => {

    it("accepts a legal burn play", () => {

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

        expect(result.actions).toHaveLength(1);

        expect(
            result.actions[0].type,
        ).toBe(ActionType.Burn);

    });

    it("rejects a card played from outside the hand", () => {

        const game = new TestGame();

        const gateCard = game.addGateCard({
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
                    id: gateCard.id,
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

        expect(result.success).toBe(false);

    });

    it("rejects incompatible colors", () => {

        const game = new TestGame();

        const handCard = game.addHandCard({
            colors: [CardColor.Red],
        });

        game.addGateCard({
            side: PlayerSide.Bottom,
            position: BoardPosition.Center,
            colors: [CardColor.Blue],
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

        expect(result.success).toBe(false);

    });

});