import { EngineContext } from "@/lib/game/EngineContext";

import {
    CardInstance,
} from "@/lib/game/models";

import {
    PileReference,
} from "@/lib/game/refs";

import {
    findPile,
} from "../lookup";

export function findBottomCard(
    context: EngineContext,
    reference: PileReference,
): CardInstance | null {

    const pile =
        findPile(
            context,
            reference,
        );

    if (
        !pile ||
        pile.cards.length === 0
    ) {

        return null;

    }

    return pile.cards[
        pile.cards.length - 1
    ];

}