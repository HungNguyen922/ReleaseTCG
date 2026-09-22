import { BaseEvent } from "../BaseEvent";
import { EventType } from "../EventType";

export interface PlayerPassedEvent extends BaseEvent {
    type: EventType.PlayerPassed;

    playerId: string;

    passesRemaining: number;
}

export function createPlayerPassedEvent(
    playerId: string,
    passesRemaining: number,
): PlayerPassedEvent {
    return {
        type: EventType.PlayerPassed,
        playerId,
        passesRemaining,
    };
}