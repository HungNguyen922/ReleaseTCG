import { EngineContext } from "@/lib/game/EngineContext";

import {
    GateDestroyedEvent,
} from "@/lib/game/events/state";

import { processEventListeners } from "@/lib/game/events/listeners/processEventListeners"

export function processGateDestroyedEvent(
    context: EngineContext,
    event: GateDestroyedEvent,
): void {

    processEventListeners(
        context,
        event,
    );

}