import { EngineContext } from "@/lib/game/EngineContext";

import {
    processCommandQueue,
} from "@/lib/game/processors";

import {
    processEventQueue,
} from "@/lib/game/events";

import {
    processPendingResolutionQueue,
} from "@/lib/game/resolution";

export function processEngine(
    context: EngineContext,
): void {

    while (

        context.commandQueue.length > 0 ||

        context.eventQueue.length > 0 ||

        context.pendingResolutions.length > 0

    ) {

        processCommandQueue(
            context,
        );

        processEventQueue(
            context,
        );

        processPendingResolutionQueue(
            context,
        );

    }

}