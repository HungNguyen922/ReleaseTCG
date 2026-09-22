import {

    EngineContext,

} from "@/lib/game/EngineContext";

import {

    PendingInteraction,

} from "./PendingInteraction";

export function dequeuePendingInteraction(

    context: EngineContext,

): PendingInteraction | undefined {

    return context.pendingInteractions.shift();

}