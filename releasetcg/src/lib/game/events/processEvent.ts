import { EngineContext } from "../EngineContext";

import {
    EngineEvent,
    EventType,
} from ".";

import { getEventListeners } from "./listeners/EventListenerRegistry";

export function processEvent(
    context: EngineContext,
    event: EngineEvent,
): void {
    if (event.type === EventType.CardMoved) {
        // whatever processCardMovedEvent uniquely does beyond the listener loop, if anything
    }

    for (const listener of getEventListeners()) {
        if (listener.accepts(event)) {
            listener.execute(context, event);
        }
    }
}