import type { DeckExport, SavedDeck } from "@/types/decks";

type Options = {
  id: string;
  ownerId: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export function toSavedDeck(deck: DeckExport, options: Options): SavedDeck {
  return {
    ...options,
    coverCardId: deck.coverCardId,
    mainDeck: deck.mainDeck,
    extraDeck: deck.extraDeck,
  };
}