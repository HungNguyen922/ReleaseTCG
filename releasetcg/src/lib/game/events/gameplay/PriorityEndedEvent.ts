import { PlayerReference } from "@/lib/game/refs";

import { EventType } from "../EventType";
import { GameplayEvent } from "./GameplayEvent";

export interface PriorityEndedEvent extends GameplayEvent {
    type: EventType.PriorityEnded;

    player: PlayerReference;
}

export function createPriorityEndedEvent(
    player: PlayerReference,
): PriorityEndedEvent {
    return {
        type: EventType.PriorityEnded,
        player,
    };
}