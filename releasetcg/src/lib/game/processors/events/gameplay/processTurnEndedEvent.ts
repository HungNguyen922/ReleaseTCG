import { EngineContext } from "@/lib/game/EngineContext";

import {
    TurnEndedEvent,
} from "@/lib/game/events/gameplay";

import { processEventListeners } from "@/lib/game/events/listeners/processEventListeners"

export function processTurnEndedEvent(
    context: EngineContext,
    event: TurnEndedEvent,
): void {

    processEventListeners(
        context,
        event,
    );

}