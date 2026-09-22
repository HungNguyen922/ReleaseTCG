import { EngineContext } from "../EngineContext";

import {
    processEvent,
} from "./processEvent";

export function processEventQueue(
    context: EngineContext,
): void {

    while (

        context.eventQueue.length > 0

    ) {

        const event =
            context.eventQueue.pop();

        if (!event) {
            continue;
        }

        processEvent(
            context,
            event,
        );

    }

}