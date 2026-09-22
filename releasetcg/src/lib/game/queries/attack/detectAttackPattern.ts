import { EngineContext } from "@/lib/game/EngineContext";

import { CardInstance } from "@/lib/game/models";

/**
 * Cards must be ordered top-first (index 0 = top of stack),
 * matching the convention used throughout the engine.
 */
export function detectAttackPattern(
    context: EngineContext,
    cards: CardInstance[],
): number {

    const powers = cards.map(
        card => context.cardDatabase[card.cardId].power,
    );

    //
    // Pair: top 2 cards share the same power.
    //

    if (
        powers.length >= 2 &&
        powers[0] === powers[1]
    ) {

        return powers[0];

    }

    //
    // Straight: top 3 cards form a numerical sequence
    // in either direction, damage = median.
    //

    if (powers.length >= 3) {

        const [a, b, c] = powers;

        const sorted = [a, b, c].sort(
            (x, y) => x - y,
        );

        const isSequential =
            sorted[1] === sorted[0] + 1 &&
            sorted[2] === sorted[1] + 1;

        if (isSequential) {

            return sorted[1];

        }

    }

    return 0;

}