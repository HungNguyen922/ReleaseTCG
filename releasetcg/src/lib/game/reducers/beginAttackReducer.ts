import { EngineContext } from "../EngineContext";

import {
    BeginAttackCommand,
} from "../commands";

import {
    createResolveAttackCommand,
} from "../commands";

import {
    findStack,
} from "../queries";

import {
    emitEvent,
} from "@/lib/game/events/emitEvent";

import {
    createAttackStartedEvent,
} from "@/lib/game/events/gameplay";

export function beginAttackReducer(
    context: EngineContext,
    command: BeginAttackCommand,
): void {

    emitEvent(
        context,
        createAttackStartedEvent(
            command.attacker,
        ),
    );

    const stack = findStack(
        context,
        command.attacker,
    );

    if (!stack) {

        throw new Error(
            "BeginAttackReducer: attacking gate has no stack.",
        );

    }

    context.commandQueue.push(

        createResolveAttackCommand(
            command.attacker,
        ),

    );

}