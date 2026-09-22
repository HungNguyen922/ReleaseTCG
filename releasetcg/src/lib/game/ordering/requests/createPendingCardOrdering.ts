import {
    PendingCardOrdering,
} from "@/lib/game/targeting";

import {
    PendingInteractionType,
} from "@/lib/game/targeting";

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