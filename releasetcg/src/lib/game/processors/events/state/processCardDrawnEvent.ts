import { EngineContext } from "@/lib/game/EngineContext";

import {
    CardsDrawnEvent,
} from "@/lib/game/events/state";

import { processEventListeners } from "@/lib/game/events/listeners/processEventListeners"

export function processCardsDrawnEvent(
    context: EngineContext,
    event: CardsDrawnEvent,
): void {

    processEventListeners(
        context,
        event,
    );

}