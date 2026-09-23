import { EngineContext } from "@/lib/game/EngineContext";

import {
    PileReference,
} from "@/lib/game/refs";

import {
    findPile,
} from "../lookup";

export function countCards(
    context: EngineContext,
    reference: PileReference,
): number {

    const pile =
        findPile(
            context,
            reference,
        );

    if (!pile) {

        return 0;

    }

    return pile.cards.length;

}