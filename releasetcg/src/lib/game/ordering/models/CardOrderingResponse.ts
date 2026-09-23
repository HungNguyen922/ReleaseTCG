import {
    CardReference,
} from "@/lib/game/refs";

export interface CardOrderingResponse {

    /**
     * Final ordering.
     *
     * First card becomes the top card.
     */
    cards: CardReference[];

}