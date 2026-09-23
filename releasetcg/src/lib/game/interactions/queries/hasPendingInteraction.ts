import {
    EngineContext,
} from "@/lib/game/EngineContext";

export function hasPendingInteraction(
    context: EngineContext,
): boolean {

    return (

        context.pendingInteractions.length > 0

    );

}