import { BaseEvent } from "../BaseEvent";
import { EventType } from "../EventType";

export interface GameEndedEvent extends BaseEvent {
    type: EventType.GameEnded;

    winnerId: string | null;

    reason: "knockout" | "lockout" | "deckout" | "outOfPasses";
}

export function createGameEndedEvent(
    winnerId: string | null,
    reason: GameEndedEvent["reason"],
): GameEndedEvent {
    return {
        type: EventType.GameEnded,
        winnerId,
        reason,
    };
}