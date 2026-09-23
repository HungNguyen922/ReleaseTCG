import type { DeckExport, DeckValidationResult } from "@/types/decks";
import type { PlayableCard } from "@/types/cards";

function getCardMap(cards: PlayableCard[]) {
  return new Map(cards.map((card) => [card.id, card]));
}

function getDeckEntries(deck: DeckExport) {
  return [...deck.mainDeck, ...deck.extraDeck];
}

function validateDeckSizes(deck: DeckExport): string[] {
  const errors: string[] = [];

  const mainCount = deck.mainDeck.reduce((sum, e) => sum + e.count, 0);

  if (mainCount !== 15) {
    errors.push(
      `Main Deck must contain exactly 15 cards (currently ${mainCount}).`
    );
  }

  const extraCount = deck.extraDeck.reduce((sum, e) => sum + e.count, 0);

  if (extraCount !== 5) {
    errors.push(
      `Extra Deck must contain exactly 5 cards (currently ${extraCount}).`
    );
  }

  return errors;
}

function validateCardExistence(
  deck: DeckExport,
  cardMap: Map<string, PlayableCard>
): string[] {
  const errors: string[] = [];

  for (const entry of getDeckEntries(deck)) {
    if (!cardMap.has(entry.cardId)) {
      errors.push(`Unknown card: ${entry.cardId}`);
    }
  }

  return errors;
}

function validateCopyLimits(
  deck: DeckExport,
  cardMap: Map<string, PlayableCard>
): string[] {
  const errors: string[] = [];
  const totals = new Map<string, number>();

  for (const entry of getDeckEntries(deck)) {
    totals.set(entry.cardId, (totals.get(entry.cardId) ?? 0) + entry.count);
  }

  for (const [cardId, total] of totals) {
    const card = cardMap.get(cardId);
    if (!card) continue;

    const maxCopies =
      card.colors.length === 1 || card.colors.length === 4 ? 1 : 2;

    if (total > maxCopies) {
      errors.push(`${card.name} exceeds its copy limit (${maxCopies}).`);
    }
  }

  return errors;
}

export function validateDeck(
  deck: DeckExport,
  cards: PlayableCard[]
): DeckValidationResult {
  const cardMap = getCardMap(cards);

  const errors = [
    ...validateDeckSizes(deck),
    ...validateCardExistence(deck, cardMap),
    ...validateCopyLimits(deck, cardMap),
  ];

  return {
    valid: errors.length === 0,
    errors,
  };
}