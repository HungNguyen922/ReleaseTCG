import { EngineContext } from "@/lib/game/EngineContext";

import {
    GateCreatedEvent,
} from "@/lib/game/events/state";

import { processEventListeners } from "@/lib/game/events/listeners/processEventListeners"

export function processGateCreatedEvent(
    context: EngineContext,
    event: GateCreatedEvent,
): void {

    processEventListeners(
        context,
        event,
    );

}