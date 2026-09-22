import { BasePlayAction } from "./BasePlayAction";

import {
    ActionCategory,
} from "../models";

import {
    CardReference,
    GateReference,
} from "../refs";

import { ActionType } from "./ActionType";

export interface ChainAction extends BasePlayAction {

    type: ActionType.Chain;

    gate: GateReference;

    openingUnit: CardReference[];

    chain: CardReference[];

}

export function createChainAction(
    player: BasePlayAction["player"],
    gate: GateReference,
    openingUnit: CardReference[],
    chain: CardReference[],
): ChainAction {

    return {

        type: ActionType.Chain,

        category: ActionCategory.Play,

        player,

        gate,

        openingUnit,

        chain,

    };

}