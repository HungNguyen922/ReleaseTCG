import {
    PlayerReference,
} from "@/lib/game/refs";

import { EventType } from "../EventType";
import { StateEvent } from "./StateEvent";

export interface PlayerDamagedEvent
    extends StateEvent {

    type: EventType.PlayerDamaged;

    player: PlayerReference;

    amount: number;

}

export function createPlayerDamagedEvent(
    player: PlayerReference,
    amount: number,
): PlayerDamagedEvent {

    return {

        type: EventType.PlayerDamaged,

        player,

        amount,

    };

}