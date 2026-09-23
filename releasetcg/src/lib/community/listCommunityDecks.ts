import type { SupabaseClient } from "@supabase/supabase-js";

import type {
  CommunityDeckSummary,
  CommunityDeckRow,
} from "@/types/community";

import type { CommunityFilter } from "@/app/(app)/community/components/CommunityBrowser";

type Props = {
  supabase: SupabaseClient;
  search: string;
  filter: CommunityFilter;
};

export async function listCommunityDecks({
  supabase,
  search,
  filter,
}: Props): Promise<CommunityDeckSummary[]> {
  let query = supabase
    .from("community_decks")
    .select("*")
    .eq("is_public", true);

  switch (filter) {
    case "newest":
      query = query.order("created_at", { ascending: false });
      break;

    case "popular":
      // TODO: replace once likes are implemented
      query = query.order("created_at", { ascending: false });
      break;

    case "mine": {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        query = query.eq("owner_id", user.id);
      }

      query = query.order("created_at", { ascending: false });
      break;
    }
  }

  const { data: rows, error } = await query;

  if (error) {
    throw error;
  }

  const decks = (rows ?? []) as CommunityDeckRow[];

  const ownerIds = [...new Set(decks.map((d) => d.owner_id))];

  const coverCardIds = [
    ...new Set(decks.map((d) => d.cover_card_id).filter(Boolean)),
  ] as string[];

  const [{ data: users }, { data: cards }] = await Promise.all([
    supabase.from("users").select("id, username").in("id", ownerIds),

    supabase
      .from("cards")
      .select("id, CardNumber, SetName")
      .in("id", coverCardIds),
  ]);

  const userMap = new Map(
    (users ?? []).map((u) => [u.id, u.username ?? "Unknown"])
  );

  const cardMap = new Map((cards ?? []).map((c) => [c.id, c]));

  const summaries: CommunityDeckSummary[] = decks.map((deck) => {
    const cover = deck.cover_card_id
      ? cardMap.get(deck.cover_card_id)
      : null;

    return {
      id: deck.id,

      title: deck.title,
      description: deck.description,

      author: userMap.get(deck.owner_id) ?? "Unknown",

      coverCardId: deck.cover_card_id,
      coverCardNumber: cover?.CardNumber ?? null,
      coverSetName: cover?.SetName ?? null,

      likes: 0,
      comments: 0,

      createdAt: deck.created_at,
    };
  });

  if (!search.trim()) {
    return summaries;
  }

  const term = search.trim().toLowerCase();

  return summaries.filter(
    (deck) =>
      deck.title.toLowerCase().includes(term) ||
      deck.description.toLowerCase().includes(term) ||
      deck.author.toLowerCase().includes(term)
  );
}