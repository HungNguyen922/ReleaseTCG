import { EngineContext } from "@/lib/game/EngineContext";

import {
    MoveGateCommand,
} from "@/lib/game/commands";

import {
    findGate,
} from "@/lib/game/queries";

import {
    emitEvent,
} from "@/lib/game/events/emitEvent";

import {
    createGateMovedEvent,
} from "@/lib/game/events/state";

export function moveGateReducer(
    context: EngineContext,
    command: MoveGateCommand,
): void {

    //
    // Resolve gates.
    //

    const source =
        findGate(
            context,
            command.source,
        );

    if (!source) {

        throw new Error(
            "MoveGateReducer: source gate not found.",
        );

    }

    const destination =
        findGate(
            context,
            command.destination,
        );

    if (!destination) {

        throw new Error(
            "MoveGateReducer: destination gate not found.",
        );

    }

    //
    // Source must contain a stack.
    //

    if (!source.stack) {

        throw new Error(
            "MoveGateReducer: source gate is empty.",
        );

    }

    //
    // Preserve the original references for
    // the emitted event.
    //

    const previousGate = {
        ...command.source,
    };

    const nextGate = {
        ...command.destination,
    };

    //
    // Ensure the destination has a stack.
    //

    destination.stack ??= {

        cards: [],

    };

    //
    // Move the entire source stack onto
    // the destination stack.
    //

    destination.stack.cards.unshift(
        ...source.stack.cards,
    );

    //
    // Remove the source stack.
    //

    source.stack = null;

    //
    // Emit state event.
    //

    emitEvent(
        context,
        createGateMovedEvent(
            previousGate,
            nextGate,
        ),
    );

}