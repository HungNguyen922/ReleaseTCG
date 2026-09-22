import {

    EngineContext,

} from "@/lib/game/EngineContext";

import {

    PendingInteraction,

} from "./PendingInteraction";

export function enqueuePendingInteraction(

    context: EngineContext,

    interaction: PendingInteraction,

): void {

    context.pendingInteractions.push(

        interaction,

    );

}