import { ActionType } from "./ActionType";
import { PileReference } from "../refs/PileReference";
import { PlayerReference } from "../refs/PlayerReference";

export interface DrawCardsAction {
    type: ActionType.DrawCards;

    player: PlayerReference;

    source: PileReference;

    count: number;
}

export function createDrawCardsAction(
    player: PlayerReference,
    source: PileReference,
    count: number,
): DrawCardsAction {
    return {
        type: ActionType.DrawCards,
        player,
        source,
        count,
    };
}