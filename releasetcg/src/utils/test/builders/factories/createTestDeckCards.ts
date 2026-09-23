import type {
    DeckEntry,
} from "@/types/decks";

import type {
    CardInstance,
} from "@/lib/game/models";

import {
    createTestCardInstance,
} from "./createTestCardInstance";

interface Options {

    entries: DeckEntry[];

    ownerId: string;

}

export function createTestDeckCards({

    entries,

    ownerId,

}: Options): CardInstance[] {

    const cards: CardInstance[] = [];

    for (const entry of entries) {

        for (
            let copy = 0;
            copy < entry.count;
            copy++
        ) {

            cards.push(

                createTestCardInstance({

                    cardId: entry.cardId,

                    ownerId,

                }),

            );

        }

    }

    return cards;

}