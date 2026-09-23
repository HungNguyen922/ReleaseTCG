import { EngineContext } from "@/lib/game/EngineContext";

import {
    createCardsRevealedEvent,
} from "@/lib/game/events/state";

import { emitEvent } from "@/lib/game/events";

import {
    RevealCardsOperation,
} from "../operations";

export function revealCardsExecutor(
    context: EngineContext,
    command: RevealCardsOperation,
): void {

    //
    // Revealing is informational.
    // No state mutation required.
    //

    emitEvent(

        context,

        createCardsRevealedEvent(

            command.cards,

            [command.player],

        ),

    );

}