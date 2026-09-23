import { EngineContext } from "../EngineContext";

import {
    MoveCardCommand,
} from "../commands";

import {
    findCard,
} from "../queries";

import {
    removeCard,
    insertCard,
} from "./helpers";

import {
    emitEvent,
} from "@/lib/game/events/emitEvent";

import {
    createCardMovedEvent,
} from "@/lib/game/events/state";

export function moveCardReducer(
    context: EngineContext,
    command: MoveCardCommand,
): void {

    //
    // Resolve card.
    //

    const location = findCard(
        context,
        command.card,
    );

    if (!location) {

        throw new Error(
            "MoveCardReducer: card not found.",
        );

    }

    //
    // Preserve the original location
    // before mutating state.
    //

    const previousLocation = {
        ...location.location,
    };

    //
    // Move the card.
    //

    removeCard(
        context,
        location,
    );

    insertCard(
        context,
        location.card,
        command.destination,
    );

    //
    // Emit movement event.
    //

    emitEvent(
        context,
        createCardMovedEvent(
            command.card,
            previousLocation,
            command.destination,
        ),
    );

}