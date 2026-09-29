import { ActionType } from "./ActionType";
import { PlayerReference } from "../refs/PlayerReference";

export interface DeclineParryAction {
    type: ActionType.DeclineParry;

    player: PlayerReference;
}

export function createDeclineParryAction(
    player: PlayerReference,
): DeclineParryAction {
    return {
        type: ActionType.DeclineParry,
        player,
    };
}