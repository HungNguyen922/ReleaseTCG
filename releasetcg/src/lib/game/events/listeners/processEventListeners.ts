import { EngineContext } from "@/lib/game/EngineContext";

import {
    EngineEvent,
} from "../EngineEvent";

import {
    getEventListeners,
} from "./EventListenerRegistry";

export function processEventListeners(
    context: EngineContext,
    event: EngineEvent,
): void {

    for (

        const listener of

        getEventListeners()

    ) {

        if (

            listener.accepts(
                event,
            )

        ) {

            listener.execute(

                context,

                event,

            );

        }

    }

}