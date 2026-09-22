import {
    EngineContext,
} from "@/lib/game/EngineContext";

import {
    hasPendingInteraction,
    peekPendingInteraction,
} from "./queries";

import { completePendingInteraction } from "./reducers";

import {
    processPendingInteraction,
} from ".";

import {
    processCommandQueue,
} from "@/lib/game/processors";

import {
    processEventQueue,
} from "@/lib/game/events";

export function submitInteractionResponse(

    context: EngineContext,

    response: unknown,

): void {

    if (

        !hasPendingInteraction(

            context,

        )

    ) {

        throw new Error(

            "No pending interaction.",

        );

    }

    const interaction =

        peekPendingInteraction(

            context,

        );

    if (!interaction) {

        return;

    }

    completePendingInteraction(

        context,

    );

    processPendingInteraction(

        interaction,

        response,

    );

    processCommandQueue(

        context,

    );

    processEventQueue(

        context,

    );

}