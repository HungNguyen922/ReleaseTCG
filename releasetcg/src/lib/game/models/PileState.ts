import { CardInstance } from "./CardInstance";
import { PileType } from "./PileType";
import { AttachedZone } from "./";

export interface PileState {
    /**
     * Unique runtime identifier.
     */
    id: string;

    /**
     * What kind of pile this is.
     */
    pileType: PileType;

    /**
     * Ordered cards.
     *
     * Index 0 is considered the top of the pile.
     */
    cards: CardInstance[];

    /**
     * Owning player.
     *
     * Undefined for shared piles.
     */
    ownerId?: string;

    /**
     * If this pile exists because of an effect,
     * this stores the source card.
     */
    sourceCardId?: string;

    /**
     * If attached to a gate, store the gate location.
     */
    attachedZone?: AttachedZone;
}