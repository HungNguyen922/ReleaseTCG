import { ActionCategory } from "../models";

import {
    CardReference,
    LocationReference,
    PlayerReference,
} from "../refs";

import { ActionType } from "./ActionType";

export interface SetAction {

    category: ActionCategory.Play;

    type: ActionType.Set;

    player: PlayerReference;

    cards: CardReference[];

    destinations: LocationReference[];

}

export function createSetAction(
    player: PlayerReference,
    cards: CardReference[],
    destinations: LocationReference[],
): SetAction {

    return {

        category: ActionCategory.Play,

        type: ActionType.Set,

        player,

        cards,

        destinations,

    };

}