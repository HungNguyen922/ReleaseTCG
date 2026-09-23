import { ActionType } from "./ActionType";
import { PileReference } from "../refs/PileReference";

export interface ShufflePileAction {
    type: ActionType.ShufflePile;

    pile: PileReference;
}

export function createShufflePileAction(
    pile: PileReference,
): ShufflePileAction {
    return {
        type: ActionType.ShufflePile,
        pile,
    };
}