import type { SupabaseClient } from "@supabase/supabase-js";

import type { CommunityDeck } from "@/types/community";
import type { Deck } from "@/types/decks";

export async function getCommunityDeck(
  supabase: SupabaseClient,
  id: string
): Promise<CommunityDeck> {
  const { data, error } = await supabase
    .from("community_decks")
    .select(`
      id,
      title,
      description,
      deck,
      owner_id,
      created_at,
      updated_at,

      owner:owner_id (
        username
      ),

      cover:cover_card_id (
        CardNumber,
        SetName
      )
    `)
    .eq("id", id)
    .single();

  if (error || !data) {
    throw new Error("Community deck not found.");
  }

  const post = data as any;

  const storedDeck = post.deck as Deck;

  const cover = Array.isArray(post.cover) ? post.cover[0] : post.cover;

  return {
    id: post.id,

    title: post.title,
    description: post.description,

    deck: {
      name: storedDeck.name,
      coverCardId: storedDeck.coverCardId,
      mainDeck: storedDeck.mainDeck,
      extraDeck: storedDeck.extraDeck,
    },

    author: post.owner?.username ?? "Unknown",
    ownerId: post.owner_id,

    coverCardId: post.cover_card_id ?? storedDeck.coverCardId ?? null,
    coverCardNumber: cover?.CardNumber ?? null,
    coverSetName: cover?.SetName ?? null,

    likes: 0,
    comments: 0,

    createdAt: post.created_at,
    updatedAt: post.updated_at,
  };
}