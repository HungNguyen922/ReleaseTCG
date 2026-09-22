import { StackReference } from "@/lib/game/refs";

import { EventType } from "../EventType";
import { GameplayEvent } from "./GameplayEvent";

export interface AttackStartedEvent extends GameplayEvent {
    type: EventType.AttackStarted;

    attacker: StackReference;
}

export function createAttackStartedEvent(
    attacker: StackReference,
): AttackStartedEvent {
    return {
        type: EventType.AttackStarted,
        attacker,
    };
}