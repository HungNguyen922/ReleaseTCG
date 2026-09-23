import { ActionType } from "./ActionType";
import { PlayerReference } from "../refs/PlayerReference";

export interface HealPlayerAction {
    type: ActionType.HealPlayer;

    player: PlayerReference;

    amount: number;
}

export function createHealPlayerAction(
    player: PlayerReference,
    amount: number,
): HealPlayerAction {
    return {
        type: ActionType.HealPlayer,
        player,
        amount,
    };
}