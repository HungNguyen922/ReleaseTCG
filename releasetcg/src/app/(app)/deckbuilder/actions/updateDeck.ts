"use server";

import { createClient } from "@/utils/supabase/server";
import type { DeckExport } from "@/types/decks";

type Input = {
  id: string;
  name: string;
  deck: DeckExport;
};

export async function updateDeck({
  id,
  name,
  deck,
}: Input) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("decks")
    .update({
      name,
      leader_id: deck.leader,
      main_deck: deck.mainDeck,
      extra_deck: deck.extraDeck,
    })
    .eq("id", id);

  if (error) throw error;
}