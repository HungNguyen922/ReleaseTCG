import { CardDefinition } from "@/lib/game/models";

import { DeckExport, DeckEntry } from "@/types/decks";

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

        if (mainCount < 20) {

            mainDeck.push({
                cardId: card.id,
                count: 2,
            });

            mainCount += 2;

        } else if (extraCount < 6) {

            extraDeck.push({
                cardId: card.id,
                count: 2,
            });

            extraCount += 2;

        } else {
            break;
        }

    }

    return { mainDeck, extraDeck };

}