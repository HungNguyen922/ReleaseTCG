import {
    EngineContext,
} from "../EngineContext";

import {
    CardReference,
} from "../refs";

import {
    createPendingResolution,
} from "./PendingResolution";


export function enqueuePendingResolution(
    context: EngineContext,
    card: CardReference,
): void {

    context.pendingResolutions.push(

        createPendingResolution(
            card,
        ),

    );

}