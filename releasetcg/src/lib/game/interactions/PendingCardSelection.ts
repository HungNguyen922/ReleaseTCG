import {
    BasePendingInteraction,
} from "./BasePendingInteraction";

import { PendingInteractionType } from "./PendingInteractionType";

import { CardReference } from "@/lib/game/refs";

export interface PendingCardSelection
    extends BasePendingInteraction {

    type:
        PendingInteractionType.CardSelection;

    cards: CardReference[];

    minimumSelections: number;

    maximumSelections: number;

    resolve(
        cards: CardReference[],
    ): void;

}