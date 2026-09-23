import { EngineContext } from "@/lib/game/EngineContext";

import {
    processPendingResolution,
} from "./processPendingResolution";

export function processPendingResolutionQueue(
    context: EngineContext,
): void {

    while (

        context.pendingResolutions.length > 0

    ) {

        const resolution =

            context.pendingResolutions.shift();

        if (!resolution) {

            continue;

        }

        processPendingResolution(

            context,

            resolution,

        );

    }

}