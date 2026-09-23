import { ActionType } from "./ActionType";
import { PlayerReference } from "../refs/PlayerReference";

export interface PassAction {
    type: ActionType.Pass;

    player: PlayerReference;
}

export function createPassAction(
    player: PlayerReference,
): PassAction {
    return {
        type: ActionType.Pass,
        player,
    };
}