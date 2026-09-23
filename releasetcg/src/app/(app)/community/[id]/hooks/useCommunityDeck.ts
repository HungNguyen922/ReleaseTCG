"use client";

import { useMemo } from "react";

import type { CommunityDeck } from "@/types/community";
import type { PlayableCard } from "@/types/cards";

export type DisplayCard = {
  card: PlayableCard;
  count: number;
};

export function useCommunityDeck(
  deck: CommunityDeck | null,
  cards: PlayableCard[]
) {
  const cardMap = useMemo(() => {
    return new Map(cards.map((card) => [card.id, card]));
  }, [cards]);

  const coverCardId = useMemo(() => {
    if (!deck) return null;
    return deck.deck.coverCardId ?? deck.deck.extraDeck[0]?.cardId ?? null;
  }, [deck]);

  const coverCard = useMemo(() => {
    if (!coverCardId) return null;
    return cardMap.get(coverCardId) ?? null;
  }, [coverCardId, cardMap]);

  const mainDeckCards = useMemo(() => {
    if (!deck) return [];

    return deck.deck.mainDeck
      .map((entry) => {
        const card = cardMap.get(entry.cardId);
        return card ? { card, count: entry.count } : null;
      })
      .filter((value): value is DisplayCard => value !== null);
  }, [deck, cardMap]);

  const extraDeckCards = useMemo(() => {
    if (!deck) return [];

    return deck.deck.extraDeck
      .map((entry) => {
        const card = cardMap.get(entry.cardId);
        return card ? { card, count: entry.count } : null;
      })
      .filter((value): value is DisplayCard => value !== null);
  }, [deck, cardMap]);

  return {
    cardMap,
    coverCard,
    mainDeckCards,
    extraDeckCards,
  };
}