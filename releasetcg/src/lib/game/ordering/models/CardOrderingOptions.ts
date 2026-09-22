import {
    CardReference, PileReference,
} from "@/lib/game/refs";

export interface CardOrderingOptions {

    pile: PileReference;

    /**
     * Cards being reordered.
     */
    cards: CardReference[];

    /**
     * Minimum cards that must remain.
     */
    minimumCards: number;

    /**
     * Maximum cards that may remain.
     */
    maximumCards: number;

    /**
     * Whether the player may leave the order unchanged.
     */
    allowNoChange: boolean;

    /**
     * Whether cards may be removed
     * from the ordered group.
     */
    allowRemovingCards: boolean;

}