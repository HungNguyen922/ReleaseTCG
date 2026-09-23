import { ActionType } from "./ActionType";
import { PlayerReference } from "../refs/PlayerReference";

export interface DealDamageAction {
    type: ActionType.DealDamage;

    player: PlayerReference;

    amount: number;
}

export function createDealDamageAction(
    player: PlayerReference,
    amount: number,
): DealDamageAction {
    return {
        type: ActionType.DealDamage,
        player,
        amount,
    };
}