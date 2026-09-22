import { BasePlayAction } from "./BasePlayAction";

import {
    ActionCategory,
} from "../models";

import {
    CardReference,
    GateReference,
} from "../refs";

import { ActionType } from "./ActionType";

export interface ConstructAction extends BasePlayAction {

    type: ActionType.Construct;

    cards: CardReference[];

    gate: GateReference;

}

export function createConstructAction(
    player: BasePlayAction["player"],
    cards: CardReference[],
    gate: GateReference,
): ConstructAction {

    return {

        type: ActionType.Construct,

        category: ActionCategory.Play,

        player,

        cards,

        gate,

    };

}