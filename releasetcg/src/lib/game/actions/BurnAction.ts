import { BasePlayAction } from "./BasePlayAction";
import { ActionCategory } from "../models";
import { CardReference, GateReference } from "../refs";
import { ActionType } from "./ActionType";

export interface BurnAction extends BasePlayAction {
    type: ActionType.Burn;

    cards: CardReference[];

    gate: GateReference;
}

export function createBurnAction(
    player: BasePlayAction["player"],
    cards: CardReference[],
    gate: GateReference,
): BurnAction {
    return {
        category: ActionCategory.Play,
        type: ActionType.Burn,
        player,
        cards,
        gate,
    };
}