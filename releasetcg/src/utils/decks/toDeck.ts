import type {
  Deck,
  DeckExport,
} from "@/types/decks";

/**
 * Converts an exported deck into an editable deck.
 */
export function toDeck(deck: DeckExport): Deck {
  return {
    id: undefined,
    name: "Imported Deck",
    coverCardId: deck.coverCardId,
    mainDeck: deck.mainDeck,
    extraDeck: deck.extraDeck,
  };
}