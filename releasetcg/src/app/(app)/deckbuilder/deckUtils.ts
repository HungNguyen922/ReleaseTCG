import type { Zone, CardCounts } from "./types";

import type { PlayableCard } from "@/types/cards";
import type { Deck } from "@/types/decks";

/* -----------------------------
   Helpers
----------------------------- */

function getZoneKey(zone: Zone) {
  return zone === "main" ? "mainDeck" : "extraDeck";
}

/* -----------------------------
   Queries
----------------------------- */

export function setCoverCard(deck: Deck, cardId: string): Deck {
  return { ...deck, coverCardId: cardId };
}

export function getDeckCounts(deck: Deck) {
  const main = deck.mainDeck.reduce((sum, c) => sum + c.count, 0);
  const extra = deck.extraDeck.reduce((sum, c) => sum + c.count, 0);

  return { main, extra };
}

export function getCardCounts(deck: Deck): CardCounts {
  const counts: CardCounts = {};

  for (const entry of deck.mainDeck) {
    counts[entry.cardId] ??= { main: 0, extra: 0 };
    counts[entry.cardId].main = entry.count;
  }

  for (const entry of deck.extraDeck) {
    counts[entry.cardId] ??= { main: 0, extra: 0 };
    counts[entry.cardId].extra = entry.count;
  }

  return counts;
}

export function getTotalCopies(deck: Deck, cardId: string) {
  let total = 0;

  for (const entry of deck.mainDeck) {
    if (entry.cardId === cardId) total += entry.count;
  }

  for (const entry of deck.extraDeck) {
    if (entry.cardId === cardId) total += entry.count;
  }

  return total;
}

export function getMaxCopies(card: PlayableCard) {
  const n = card.colors.length;
  return n === 1 || n === 4 ? 1 : 2;
}

/* -----------------------------
   Core mutation helpers
----------------------------- */

function canAddCard(deck: Deck, card: PlayableCard, zone: Zone) {
  const counts = getDeckCounts(deck);

  if (zone === "main" && counts.main >= 15) return false;
  if (zone === "extra" && counts.extra >= 5) return false;

  if (getTotalCopies(deck, card.id) >= getMaxCopies(card)) {
    return false;
  }

  return true;
}

/* -----------------------------
   Mutations
----------------------------- */

export function incrementCard(
  deck: Deck,
  card: PlayableCard,
  zone: Zone
): Deck {
  if (!canAddCard(deck, card, zone)) {
    return deck;
  }

  const key = getZoneKey(zone);
  const list = deck[key];

  const existing = list.find((c) => c.cardId === card.id);

  if (existing) {
    return {
      ...deck,
      [key]: list.map((c) =>
        c.cardId === card.id ? { ...c, count: c.count + 1 } : c
      ),
    };
  }

  return {
    ...deck,
    [key]: [...list, { cardId: card.id, count: 1 }],
  };
}

export function decrementCard(deck: Deck, cardId: string, zone: Zone): Deck {
  const key = getZoneKey(zone);
  const list = deck[key];

  const updatedList = list
    .map((c) => (c.cardId === cardId ? { ...c, count: c.count - 1 } : c))
    .filter((c) => c.count > 0);

  const stillInDeck = updatedList.some((c) => c.cardId === cardId);

  return {
    ...deck,
    [key]: updatedList,
    coverCardId:
      deck.coverCardId === cardId && !stillInDeck ? null : deck.coverCardId,
  };
}