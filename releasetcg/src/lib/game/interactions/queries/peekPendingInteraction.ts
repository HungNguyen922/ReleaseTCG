import {
    EngineContext,
} from "@/lib/game/EngineContext";

import {
    PendingInteraction,
} from "..";

export function peekPendingInteraction(
    context: EngineContext,
): PendingInteraction | null {

    return (

        context.pendingInteractions[0] ??

        null

    );

}