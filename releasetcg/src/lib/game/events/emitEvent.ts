import { EngineContext } from "@/lib/game";
import { EngineEvent } from "./EngineEvent";

export function emitEvent(
    context: EngineContext,
    event: EngineEvent,
): void {

    context.eventQueue.push(event);

}