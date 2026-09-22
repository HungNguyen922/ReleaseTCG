"use client";

import { useCallback, useMemo, useState } from "react";

import type { PlayableCard } from "@/types/cards";
import type { Deck } from "@/types/decks";
import type { Zone } from "../types";

import { incrementCard, decrementCard, getCardCounts, getDeckCounts } from "../deckUtils";

export type DeckCard = {
  card: PlayableCard;
  count: number;
};

export function useDeckBuilder(cards: PlayableCard[]) {
  const [deck, setDeck] = useState<Deck>({
    name: "",
    mainDeck: [],
    extraDeck: [],
  });

  const [activeZone, setActiveZone] = useState<Zone>("main");

  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);
  const [hoverAnchor, setHoverAnchor] = useState<DOMRect | null>(null);

  const cardMap = useMemo(
    () => new Map(cards.map((card) => [card.id, card])),
    [cards]
  );

  const hoveredCard = hoveredCardId ? cardMap.get(hoveredCardId) ?? null : null;

  const filteredCards = cards;

  const counts = useMemo(() => getDeckCounts(deck), [deck]);
  const cardCounts = useMemo(() => getCardCounts(deck), [deck]);

  const mapDeckCards = useCallback(
    (entries: { cardId: string; count: number }[]): DeckCard[] =>
      entries.flatMap((entry) => {
        const card = cardMap.get(entry.cardId);
        return card ? [{ card, count: entry.count }] : [];
      }),
    [cardMap]
  );

  const mainDeckCards = useMemo(
    () => mapDeckCards(deck.mainDeck),
    [deck.mainDeck, mapDeckCards]
  );

  const extraDeckCards = useMemo(
    () => mapDeckCards(deck.extraDeck),
    [deck.extraDeck, mapDeckCards]
  );

  const handleDeckNameChange = useCallback((name: string) => {
    setDeck((prev) => ({ ...prev, name }));
  }, []);

  const handleCardClick = useCallback(
    (card: PlayableCard) => {
      setDeck((prev) => incrementCard(prev, card, activeZone));
    },
    [activeZone]
  );

  const handleIncrementCard = useCallback(
    (cardId: string, zone: Zone) => {
      const card = cardMap.get(cardId);
      if (!card) return;

      setDeck((prev) => incrementCard(prev, card, zone));
    },
    [cardMap]
  );

  const handleDecrementCard = useCallback((cardId: string, zone: Zone) => {
    setDeck((prev) => decrementCard(prev, cardId, zone));
  }, []);

  const loadDeck = useCallback((deck: Deck) => {
    setDeck(deck);
  }, []);

  return {
    deck,
    activeZone,

    hoveredCard,
    hoverAnchor,

    filteredCards,

    counts,
    cardCounts,

    mainDeckCards,
    extraDeckCards,

    setActiveZone,
    setHoveredCardId,
    setHoverAnchor,

    handleDeckNameChange,
    handleCardClick,
    handleIncrementCard,
    handleDecrementCard,

    loadDeck,
  };
}