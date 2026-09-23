import { BasePlayAction } from "./BasePlayAction";

import { ActionCategory } from "../models";

import {
    CardReference,
    GateReference,
} from "../refs";

import { ActionType } from "./ActionType";

export interface SplitAction
    extends BasePlayAction {

    type: ActionType.Split;

    cards: CardReference[];

    gates: GateReference[];

}

export function createSplitAction(
    player: BasePlayAction["player"],
    cards: CardReference[],
    gates: GateReference[],
): SplitAction {

    return {

        type: ActionType.Split,

        category: ActionCategory.Play,

        player,

        cards,

        gates,

    };

}