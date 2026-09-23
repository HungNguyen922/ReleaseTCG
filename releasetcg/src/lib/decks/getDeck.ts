import type { SupabaseClient } from "@supabase/supabase-js";
import type { Deck, DeckEntry } from "@/types/decks";

export async function getDeck(
  supabase: SupabaseClient,
  ownerId: string,
  deckId: string
): Promise<Deck> {
  const { data: deckRow, error: deckError } = await supabase
    .from("decks")
    .select("id, name, cover_card_id")
    .eq("id", deckId)
    .eq("owner_id", ownerId)
    .single();

  if (deckError || !deckRow) {
    throw new Error("Deck not found.");
  }

  const { data: cardRows, error: cardsError } = await supabase
    .from("deck_cards")
    .select("card_id, count, zone")
    .eq("deck_id", deckId);

  if (cardsError) {
    throw cardsError;
  }

  const mainDeck: DeckEntry[] = [];
  const extraDeck: DeckEntry[] = [];

  for (const row of cardRows ?? []) {
    const entry: DeckEntry = { cardId: row.card_id, count: row.count };

    if (row.zone === "main") {
      mainDeck.push(entry);
    } else {
      extraDeck.push(entry);
    }
  }

  return {
    id: deckRow.id,
    name: deckRow.name,
    coverCardId: deckRow.cover_card_id ?? null,
    mainDeck,
    extraDeck,
  };
}