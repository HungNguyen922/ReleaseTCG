import { ActionType } from "./ActionType";
import { PlayerReference } from "../refs/PlayerReference";

export interface DrawLeaderAction {
    type: ActionType.DrawLeader;

    player: PlayerReference;
}

export function createDrawLeaderAction(
    player: PlayerReference,
): DrawLeaderAction {
    return {
        type: ActionType.DrawLeader,
        player,
    };
}