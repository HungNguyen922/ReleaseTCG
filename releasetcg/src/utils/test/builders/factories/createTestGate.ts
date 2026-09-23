import {
    BoardPosition,
    GateZone,
    PlayerSide,
} from "../../../../lib/game/models";

import { CardInstance } from "../../../../lib/game/models";

export function createTestGate(
    cards: CardInstance[] = [],
    side: PlayerSide = PlayerSide.Bottom,
    position: BoardPosition = BoardPosition.Center,
): GateZone {

    return {

        side,

        position,

        stack: {

            cards,

        },

    };

}