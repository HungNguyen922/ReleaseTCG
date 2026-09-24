import {
    PendingCardOrdering,
    PendingInteractionType,
} from "@/lib/game/interactions";

import {
    CardOrderingRequest,
} from "../models";

import {
    CardOrderingResponse,
} from "../models";

export function createPendingCardOrdering(

    request: CardOrderingRequest,

    resolve: (
        response: CardOrderingResponse,
    ) => void,

): PendingCardOrdering {

    return {

        type:
            PendingInteractionType.CardOrdering,

        request,

        resolve,

    };

}