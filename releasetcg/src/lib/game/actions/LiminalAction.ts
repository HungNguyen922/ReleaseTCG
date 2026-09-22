import { BasePlayAction } from "./BasePlayAction";

import {
    ActionCategory,
} from "../models";

import {
    CardReference,
    GateReference,
} from "../refs";

import {
    ActionType,
} from "./ActionType";

export interface LiminalAction
    extends BasePlayAction {

    type: ActionType.Liminal;

    card: CardReference;

    gates: GateReference[];

}

export function createLiminalAction(
    player: BasePlayAction["player"],
    card: CardReference,
    gates: GateReference[],
): LiminalAction {

    return {

        type: ActionType.Liminal,

        category: ActionCategory.Play,

        player,

        card,

        gates,

    };

}