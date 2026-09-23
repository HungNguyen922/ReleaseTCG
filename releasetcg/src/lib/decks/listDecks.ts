import type { SupabaseClient } from "@supabase/supabase-js";
import type { DeckSummary } from "@/types/decks";

type CoverFields = {
  CardNumber: string | null;
  SetName: string | null;
};

export async function listDecks(
  supabase: SupabaseClient,
  ownerId: string
): Promise<DeckSummary[]> {
  const { data, error } = await supabase
    .from("decks")
    .select(`
      id,
      name,
      updated_at,
      cover_card_id,
      cover:cover_card_id (
        CardNumber,
        SetName
      )
    `)
    .eq("owner_id", ownerId)
    .order("updated_at", { ascending: false });

  if (error) throw error;

  const decks = data ?? [];

  // Decks with no chosen cover fall back to the first card in their extra deck.
  const uncoveredDeckIds = decks
    .filter((deck) => !deck.cover_card_id)
    .map((deck) => deck.id);

  const fallbackByDeckId = new Map<string, CoverFields>();

  if (uncoveredDeckIds.length > 0) {
    const { data: extraCards, error: extraError } = await supabase
      .from("deck_cards")
      .select(`
        deck_id,
        card:card_id (
          CardNumber,
          SetName
        )
      `)
      .in("deck_id", uncoveredDeckIds)
      .eq("zone", "extra");

    if (extraError) throw extraError;

    for (const row of extraCards ?? []) {
      if (fallbackByDeckId.has(row.deck_id)) continue;

      const card = Array.isArray(row.card) ? row.card[0] : row.card;
      if (card) {
        fallbackByDeckId.set(row.deck_id, card);
      }
    }
  }

  return decks.map((deck) => {
    const cover = Array.isArray(deck.cover) ? deck.cover[0] : deck.cover;
    const fallback = fallbackByDeckId.get(deck.id);

    return {
      id: deck.id,
      name: deck.name,

      coverCardId: deck.cover_card_id ?? null,
      coverCardNumber: cover?.CardNumber ?? fallback?.CardNumber ?? null,
      coverSetName: cover?.SetName ?? fallback?.SetName ?? null,

      updatedAt: deck.updated_at,
    };
  });
}