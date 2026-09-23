import { EngineContext } from "../EngineContext";

import {
    StartPriorityCommand,
} from "../commands";

import {
    emitEvent,
} from "@/lib/game/events/emitEvent";

import {
    createPriorityStartedEvent,
} from "@/lib/game/events/gameplay";

export function startPriorityReducer(
    context: EngineContext,
    command: StartPriorityCommand,
): void {

    //
    // Update priority.
    //

    context.state.priority.currentPlayerId =
        command.player.id;

    //
    // Emit gameplay event.
    //

    emitEvent(
        context,
        createPriorityStartedEvent(
            command.player,
        ),
    );

}