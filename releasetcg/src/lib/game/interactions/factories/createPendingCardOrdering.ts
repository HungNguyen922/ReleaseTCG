import {

    PendingCardOrdering,

} from "../PendingCardOrdering";

import {

    PendingInteractionType,

} from "../PendingInteractionType";

import {

    CardReference,

} from "@/lib/game/refs";

export function createPendingCardOrdering(

    cards: CardReference[],

    resolve: (
        orderedCards: CardReference[],
    ) => void,

): PendingCardOrdering {

    return {

        type:
            PendingInteractionType.CardOrdering,

        cards,

        resolve,

    };

}