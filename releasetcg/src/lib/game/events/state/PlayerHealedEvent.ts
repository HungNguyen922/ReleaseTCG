import {
    PlayerReference,
} from "@/lib/game/refs";

import { EventType } from "../EventType";
import { StateEvent } from "./StateEvent";

export interface PlayerHealedEvent
    extends StateEvent {

    type: EventType.PlayerHealed;

    player: PlayerReference;

    amount: number;

}

export function createPlayerHealedEvent(
    player: PlayerReference,
    amount: number,
): PlayerHealedEvent {

    return {

        type: EventType.PlayerHealed,

        player,

        amount,

    };

}