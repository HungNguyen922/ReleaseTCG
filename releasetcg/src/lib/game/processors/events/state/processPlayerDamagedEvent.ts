import { EngineContext } from "@/lib/game/EngineContext";

import {
    PlayerDamagedEvent,
} from "@/lib/game/events/state";

import { processEventListeners } from "@/lib/game/events/listeners/processEventListeners"

export function processPlayerDamagedEvent(
    context: EngineContext,
    event: PlayerDamagedEvent,
): void {

    processEventListeners(
        context,
        event,
    );

}