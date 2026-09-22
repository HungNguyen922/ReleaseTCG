import {
    EngineContext,
} from "@/lib/game/EngineContext";

export function hasPendingInteractions(

    context: EngineContext,

): boolean {

    return (

        context.pendingInteractions.length > 0

    );

}