import { ActionType } from "./ActionType";
import { PlayerReference } from "../refs/PlayerReference";
import { CardReference } from "../refs/CardReference";

export interface ParryAction {
    type: ActionType.Parry;

    player: PlayerReference;

    card: CardReference;
}

export function createParryAction(
    player: PlayerReference,
    card: CardReference,
): ParryAction {
    return {
        type: ActionType.Parry,
        player,
        card,
    };
}