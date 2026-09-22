import {
    BasePendingInteraction,
} from "./BasePendingInteraction";

import {
    PendingInteractionType,
} from "./PendingInteractionType";

import {
    CardOrderingRequest,
    CardOrderingResponse,
} from "@/lib/game/ordering/models";

export interface PendingCardOrdering
    extends BasePendingInteraction {

    type:
        PendingInteractionType.CardOrdering;

    request: CardOrderingRequest;

    resolve(
        response: CardOrderingResponse,
    ): void;

}