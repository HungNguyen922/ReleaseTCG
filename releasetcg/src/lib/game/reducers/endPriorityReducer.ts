import { EngineContext } from "../EngineContext";

import {
    EndPriorityCommand,
} from "../commands";

import {
    emitEvent,
} from "@/lib/game/events/emitEvent";

import {
    createPriorityEndedEvent,
} from "@/lib/game/events/gameplay";

export function endPriorityReducer(
    context: EngineContext,
    command: EndPriorityCommand,
): void {

    context.state.priority.currentPlayerId =
        command.player.id;
        
    emitEvent(
        context,
        createPriorityEndedEvent(
            command.player,
        ),
    );

}