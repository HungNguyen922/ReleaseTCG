import { EngineContext } from "@/lib/game/EngineContext";

import {
    CardMovedEvent,
} from "@/lib/game/events/state";

import { processEventListeners } from "@/lib/game/events/listeners/processEventListeners"

export function processCardMovedEvent(
    context: EngineContext,
    event: CardMovedEvent,
): void {

    processEventListeners(
        context,
        event,
    );

}