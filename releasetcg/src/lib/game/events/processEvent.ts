import { EngineContext } from "../EngineContext";

import {
    EngineEvent,
    EventType,
} from ".";

import { processCardMovedEvent } from "../processors/events";

import { getEventListeners } from "./listeners/EventListenerRegistry";

export function processEvent(
    context: EngineContext,
    event: EngineEvent,
): void {

    switch (event.type) {

        case EventType.CardMoved:
            processCardMovedEvent(
                context,
                event,
            );
            break;

        default:
            break;

    }

    for (const listener of getEventListeners()) {

        if (listener.accepts(event)) {

            listener.execute(
                context,
                event,
            );

        }

    }

}