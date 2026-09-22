import { EngineContext } from "@/lib/game/EngineContext";

import {
    PhaseStartedEvent,
} from "@/lib/game/events/gameplay";

import { processEventListeners } from "@/lib/game/events/listeners/processEventListeners"

export function processPhaseStartedEvent(
    context: EngineContext,
    event: PhaseStartedEvent,
): void {

    processEventListeners(
        context,
        event,
    );

}