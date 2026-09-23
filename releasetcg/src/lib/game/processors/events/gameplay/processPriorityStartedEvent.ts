import { EngineContext } from "@/lib/game/EngineContext";

import {
    PriorityStartedEvent,
} from "@/lib/game/events/gameplay";

import { processEventListeners } from "@/lib/game/events/listeners/processEventListeners"

export function processPriorityStartedEvent(
    context: EngineContext,
    event: PriorityStartedEvent,
): void {

    processEventListeners(
        context,
        event,
    );

}