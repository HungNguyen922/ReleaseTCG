import { EngineContext } from "@/lib/game/EngineContext";

import {
    AttackStartedEvent,
} from "@/lib/game/events/gameplay";

import { processEventListeners } from "@/lib/game/events/listeners/processEventListeners"

export function processAttackStartedEvent(
    context: EngineContext,
    event: AttackStartedEvent,
): void {

    processEventListeners(
        context,
        event,
    );

}