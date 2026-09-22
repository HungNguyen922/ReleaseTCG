import { EngineContext } from "../EngineContext";

import { processCommandQueue } from "./processCommandQueue";

import { processGame } from "./";

import { hasPendingInteractions } from "@/lib/game/interactions";

import { checkWinConditions } from "../rules/wincons";

export function processEngine(
    context: EngineContext,
): void {

    while (true) {

        const processed = processCommandQueue(
            context,
        );

        checkWinConditions(
            context,
        );

        if (
            context.state.winnerId
        ) {
            return;
        }

        if (
            hasPendingInteractions(
                context,
            )
        ) {
            return;
        }

        processGame(
            context,
        );

        //
        // Nothing happened.
        //

        if (

            processed === 0 &&
            context.commandQueue.length === 0

        ) {

            return;

        }

    }

}