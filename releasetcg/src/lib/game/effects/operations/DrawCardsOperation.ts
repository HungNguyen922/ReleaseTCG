import {
    PlayerReference,
} from "@/lib/game/refs";

import {
    OperationType,
} from "./OperationType";

export interface DrawCardsOperation {

    type: OperationType.DrawCards;

    player: PlayerReference;

    amount: number;

}

export function createDrawCardsOperation(
    player: PlayerReference,
    amount: number,
): DrawCardsOperation {

    return {

        type: OperationType.DrawCards,

        player,

        amount,

    };

}