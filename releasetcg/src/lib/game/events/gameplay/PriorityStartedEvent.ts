import { PlayerReference } from "@/lib/game/refs";

import { EventType } from "../EventType";
import { GameplayEvent } from "./GameplayEvent";

export interface PriorityStartedEvent
    extends GameplayEvent {

    type: EventType.PriorityStarted;

    player: PlayerReference;

}

export function createPriorityStartedEvent(
    player: PlayerReference,
): PriorityStartedEvent {

    return {

        type: EventType.PriorityStarted,

        player,

    };

}