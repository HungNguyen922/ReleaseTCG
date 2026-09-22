import { BasePlayAction } from "./BasePlayAction";

import { ActionCategory } from "../models";

import {
    CardReference,
    GateReference,
} from "../refs";

import { ActionType } from "./ActionType";

export interface BoundAction
    extends BasePlayAction {

    type: ActionType.Bound;

    gate: GateReference;

    firstHalf: CardReference;

    middle: CardReference[];

    secondHalf: CardReference;

}

export function createBoundAction(
    player: BasePlayAction["player"],
    gate: GateReference,
    firstHalf: CardReference,
    middle: CardReference[],
    secondHalf: CardReference,
): BoundAction {

    return {

        type: ActionType.Bound,

        category: ActionCategory.Play,

        player,

        gate,

        firstHalf,

        middle,

        secondHalf,

    };

}