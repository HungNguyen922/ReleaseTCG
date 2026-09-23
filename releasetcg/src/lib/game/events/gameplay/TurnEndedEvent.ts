import { PlayerReference } from "@/lib/game/refs";

import { EventType } from "../EventType";
import { GameplayEvent } from "./GameplayEvent";

export interface TurnEndedEvent extends GameplayEvent {
    type: EventType.TurnEnded;

    player: PlayerReference;
}

export function createTurnEndedEvent(
    player: PlayerReference,
): TurnEndedEvent {
    return {
        type: EventType.TurnEnded,
        player,
    };
}