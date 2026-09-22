import {

    PendingCardSelection,

} from "../PendingCardSelection";

import {

    PendingInteractionType,

} from "../PendingInteractionType";

import {

    CardReference,

} from "@/lib/game/refs";

export function createPendingCardSelection(

    cards: CardReference[],

    minimumSelections: number,

    maximumSelections: number,

    resolve: (
        cards: CardReference[],
    ) => void,

): PendingCardSelection {

    return {

        type:
            PendingInteractionType.CardSelection,

        cards,

        minimumSelections,

        maximumSelections,

        resolve,

    };

}