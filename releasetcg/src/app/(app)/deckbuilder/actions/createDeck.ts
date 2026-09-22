"use server";

import { createClient } from "@/utils/supabase/server";
import type { DeckExport } from "@/types/decks";

type Input = {
  name: string;
  deck: DeckExport;
};

export async function createDeck({
  name,
  deck,
}: Input) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Not authenticated");
  }

  const { data, error } = await supabase
    .from("decks")
    .insert({
      owner_id: user.id,
      name,
      leader_id: deck.leader,
      main_deck: deck.mainDeck,
      extra_deck: deck.extraDeck,
    })
    .select()
    .single();

  if (error) throw error;

  return data;
}