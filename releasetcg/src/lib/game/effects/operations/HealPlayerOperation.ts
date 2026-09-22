import {
    PlayerReference,
} from "@/lib/game/refs";

export interface HealPlayerOperation {

    player: PlayerReference;

    amount: number;

}

export function createHealPlayerOperation(
    player: PlayerReference,
    amount: number,
): HealPlayerOperation {

    return {

        player,

        amount,

    };

}