import {
    EngineContext,
} from "@/lib/game/EngineContext";

import {
    CardOrderingRequest,
    CardOrderingResponse,
} from "../models";

import {
    createPendingCardOrdering,
} from "./createPendingCardOrdering";

export function processCardOrderingRequest(

    context: EngineContext,

    request: CardOrderingRequest,

    resolve: (
        response: CardOrderingResponse,
    ) => void,

): void {

    context.pendingInteractions.push(

        createPendingCardOrdering(

            request,

            resolve,

        ),

    );

}