import type { Deck } from "@/types/decks";
import type { DeckExport } from "@/types/decks";

export function toDeckExport(deck: Deck): DeckExport {
  return {
    coverCardId: deck.coverCardId,
    mainDeck: deck.mainDeck,
    extraDeck: deck.extraDeck,
  };
}