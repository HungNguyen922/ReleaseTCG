"use server";

import { createClient } from "@/utils/supabase/server";

export async function deleteDeck(id: string) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("decks")
    .delete()
    .eq("id", id);

  if (error) throw error;
}