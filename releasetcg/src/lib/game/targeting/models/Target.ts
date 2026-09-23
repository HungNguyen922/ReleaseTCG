import {
    CardReference,
    GateReference,
    PileReference,
    PlayerReference,
} from "@/lib/game/refs";

import {
    TargetType,
} from "./TargetType";

export interface PlayerTarget {

    type: TargetType.Player;

    reference: PlayerReference;

}

export interface CardTarget {

    type: TargetType.Card;

    reference: CardReference;

}

export interface GateTarget {

    type: TargetType.Gate;

    reference: GateReference;

}

export interface PileTarget {

    type: TargetType.Pile;

    reference: PileReference;

}

export type Target =

    | PlayerTarget
    | CardTarget
    | GateTarget
    | PileTarget;