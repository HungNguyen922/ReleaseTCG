import { CardDefinition } from "@/lib/game/models";

import { DeckExport, DeckEntry } from "@/types/decks";

const MAIN_DECK_SIZE = 15;
const EXTRA_DECK_SIZE = 5;

export function buildPlaceholderDeck(
    cardDefinitions: CardDefinition[],
): DeckExport {

    const shuffled =
        [...cardDefinitions].sort(
            () => Math.random() - 0.5,
        );

    const mainDeck: DeckEntry[] = [];
    const extraDeck: DeckEntry[] = [];

    let mainCount = 0;
    let extraCount = 0;

    for (const card of shuffled) {

        if (mainCount < MAIN_DECK_SIZE) {

            const count = Math.min(
                2,
                MAIN_DECK_SIZE - mainCount,
            );

            mainDeck.push({
                cardId: card.id,
                count,
            });

            mainCount += count;

        } else if (extraCount < EXTRA_DECK_SIZE) {

            const count = Math.min(
                2,
                EXTRA_DECK_SIZE - extraCount,
            );

            extraDeck.push({
                cardId: card.id,
                count,
            });

            extraCount += count;

        } else {
            break;
        }

    }

    return {
        coverCardId: null,
        mainDeck,
        extraDeck,
    };

}