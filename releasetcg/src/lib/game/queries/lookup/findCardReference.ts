import {
    CardInstance,
} from "@/lib/game/models";

import {
    CardReference,
} from "@/lib/game/refs";

export function findCardReference(
    card: CardInstance,
): CardReference {

    return {

        id: card.id,

    };

}