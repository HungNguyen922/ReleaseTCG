import { EngineContext } from "@/lib/game/EngineContext";

import {
    AttackResolvedEvent,
} from "@/lib/game/events/gameplay";

import { processEventListeners } from "@/lib/game/events/listeners/processEventListeners"

export function processAttackResolvedEvent(
    context: EngineContext,
    event: AttackResolvedEvent,
): void {

    processEventListeners(
        context,
        event,
    );

}