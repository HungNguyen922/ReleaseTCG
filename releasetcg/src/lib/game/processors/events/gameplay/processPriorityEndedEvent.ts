import { EngineContext } from "@/lib/game/EngineContext";

import {
    PriorityEndedEvent,
} from "@/lib/game/events/gameplay";

import { processEventListeners } from "@/lib/game/events/listeners/processEventListeners"

export function processPriorityEndedEvent(
    context: EngineContext,
    event: PriorityEndedEvent,
): void {

    processEventListeners(
        context,
        event,
    );

}