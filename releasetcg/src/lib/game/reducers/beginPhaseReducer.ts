import { EngineContext } from "../EngineContext";

import {
    BeginPhaseCommand,
} from "../commands";

import {
    emitEvent,
} from "@/lib/game/events/emitEvent";

import {
    createPhaseStartedEvent,
} from "@/lib/game/events/gameplay";

export function beginPhaseReducer(
    context: EngineContext,
    command: BeginPhaseCommand,
): void {

    context.state.turn.phase = command.phase;

    emitEvent(
        context,
        createPhaseStartedEvent(
            command.phase,
        ),
    );

}