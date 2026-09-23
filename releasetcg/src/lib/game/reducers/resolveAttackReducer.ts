import { EngineContext } from "../EngineContext";

import {
    ResolveAttackCommand,
} from "../commands";

import {
    createDamagePlayerCommand,
} from "../commands";

import {
    createBeginPhaseCommand,
} from "../commands";

import {
    findStack,
} from "../queries";

import {
    detectAttackPattern,
} from "@/lib/game/queries/attack/detectAttackPattern";

import {
    emitEvent,
} from "@/lib/game/events/emitEvent";

import {
    createAttackResolvedEvent,
} from "@/lib/game/events/gameplay";

import {
    TurnPhase,
} from "@/lib/game/models";

export function resolveAttackReducer(
    context: EngineContext,
    command: ResolveAttackCommand,
): void {

    const stack = findStack(
        context,
        command.attacker,
    );

    if (!stack) {

        throw new Error(
            "ResolveAttackReducer: attacking gate has no stack.",
        );

    }

    const damage = detectAttackPattern(
        context,
        stack.cards,
    );

    if (damage > 0) {

        const attackerId =
            context.state.turn.currentPlayerId;

        const defenderId =
            context.state.players.find(
                player => player.id !== attackerId,
            )?.id;

        if (defenderId) {

            context.commandQueue.push(

                createDamagePlayerCommand(
                    { id: defenderId },
                    damage,
                ),

            );

        }

    }

    emitEvent(
        context,
        createAttackResolvedEvent(
            command.attacker,
        ),
    );

    context.commandQueue.push(

        createBeginPhaseCommand(
            TurnPhase.Fill,
        ),

    );

}