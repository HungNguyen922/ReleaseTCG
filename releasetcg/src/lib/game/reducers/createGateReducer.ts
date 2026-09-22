import { EngineContext } from "../EngineContext";

import {
    CreateGateCommand,
} from "../commands";

import {
    findGate,
} from "../queries";

import {
    emitEvent,
} from "@/lib/game/events/emitEvent";

import {
    createGateCreatedEvent,
} from "@/lib/game/events/state";

export function createGateReducer(
    context: EngineContext,
    command: CreateGateCommand,
): void {

    //
    // Resolve gate.
    //

    const gate = findGate(
        context,
        command.gate,
    );

    if (!gate) {

        throw new Error(
            "CreateGateReducer: gate not found.",
        );

    }

    //
    // Gate must not already exist.
    //

    if (gate.stack) {

        throw new Error(
            "CreateGateReducer: gate already exists.",
        );

    }

    //
    // Create the gate.
    //

    gate.stack = {

        cards: [],

    };

    //
    // Emit state event.
    //

    emitEvent(
        context,
        createGateCreatedEvent(
            command.gate,
        ),
    );

}