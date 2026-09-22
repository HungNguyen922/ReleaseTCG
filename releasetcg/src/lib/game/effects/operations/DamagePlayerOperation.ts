import {
    PlayerReference,
} from "@/lib/game/refs";

import {
    OperationType,
} from "./OperationType";


export interface DamagePlayerOperation {

    type: OperationType.DamagePlayer;

    player: PlayerReference;

    amount: number;

}

export function createDamagePlayerOperation(
    player: PlayerReference,
    amount: number,
): DamagePlayerOperation {

    return {

        type: OperationType.DamagePlayer,

        player,

        amount,

    };

}