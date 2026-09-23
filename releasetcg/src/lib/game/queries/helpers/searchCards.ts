import { CardInstance } from "../../models";

import {
    CardReference,
    LocationReference,
} from "../../refs";

import { CardLocation } from "../CardLocation";

export function searchCards(
    cards: CardInstance[],
    location: LocationReference,
    reference: CardReference,
): CardLocation | null {

    const position = cards.findIndex(
        card => card.id === reference.id,
    );

    if (position === -1) {
        return null;
    }

    return {
        card: cards[position],
        reference,
        location,
        position,
    };

}