import { EngineContext } from "@/lib/game/EngineContext";

import {
    PlayerHealedEvent,
} from "@/lib/game/events/state";

import { processEventListeners } from "@/lib/game/events/listeners/processEventListeners"

export function processPlayerHealedEvent(
    context: EngineContext,
    event: PlayerHealedEvent,
): void {

    processEventListeners(
        context,
        event,
    );

}