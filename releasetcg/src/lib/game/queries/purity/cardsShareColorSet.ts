import { CardInstance } from "../../models";
import { EngineContext } from "@/lib/game/EngineContext";

/**
 * Returns true if two cards share at least `minOverlap` colors.
 */
export function cardsShareColorSet(
    context: EngineContext,
    a: CardInstance,
    b: CardInstance,
    minOverlap: number = 1,
): boolean {

    const defA = context.cardDatabase[a.cardId];
    const defB = context.cardDatabase[b.cardId];

    if (!defA || !defB) {
        return false;
    }

    let overlap = 0;

    for (const color of defA.colors) {
        if (defB.colors.includes(color)) {
            overlap++;

            if (overlap >= minOverlap) {
                return true;
            }
        }
    }

    return false;
}