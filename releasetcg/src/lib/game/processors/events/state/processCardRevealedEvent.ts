import { EngineContext } from "@/lib/game/EngineContext";

import {
    CardsRevealedEvent,
} from "@/lib/game/events/state";

import { processEventListeners } from "@/lib/game/events/listeners/processEventListeners"

export function processCardsRevealedEvent(
    context: EngineContext,
    event: CardsRevealedEvent,
): void {

    processEventListeners(
        context,
        event,
    );

}