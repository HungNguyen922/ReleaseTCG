import { EngineContext } from "@/lib/game/EngineContext";

import {
    GateMovedEvent,
} from "@/lib/game/events/state";

import { processEventListeners } from "@/lib/game/events/listeners/processEventListeners"

export function processGateMovedEvent(
    context: EngineContext,
    event: GateMovedEvent,
): void {

    processEventListeners(
        context,
        event,
    );

}