import {
    EngineContext,
} from "@/lib/game/EngineContext";

import {
    PendingInteraction,
} from "..";

export function cancelPendingInteraction(
    context: EngineContext,
): PendingInteraction | null {

    return (

        context.pendingInteractions.shift() ??

        null

    );

}