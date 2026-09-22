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

export function findBottomCards(
    context: EngineContext,
    reference: PileReference,
    amount: number,
): CardInstance[] {

    const pile =
        findPile(
            context,
            reference,
        );

    if (!pile) {

        return [];

    }

    return pile.cards.slice(
        Math.max(
            0,
            pile.cards.length - amount,
        ),
    );

}