import {
    EngineContext,
} from "@/lib/game/EngineContext";

import {
    CardOrderingRequest,
    CardOrderingResponse,
} from "./models";

import {
    validateCardOrdering,
} from "./validation";

import {
    extractOrderedCards,
} from "./queries";

import {
    applyCardOrdering,
} from "./reducers";

export function processCardOrderingResponse(

    context: EngineContext,

    request: CardOrderingRequest,

    response: CardOrderingResponse,

): void {

    validateCardOrdering(

        request,

        response,

    );

    const orderedCards =

        extractOrderedCards(

            context,

            response,

        );

    applyCardOrdering(

        context,

        request.options.pile,

        orderedCards,

    );

}