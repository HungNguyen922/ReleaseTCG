"use server";

import { createClient } from "@/utils/supabase/server";

export async function getDecks() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return [];

  const { data, error } = await supabase
    .from("decks")
    .select(`
      id,
      name,
      leader_id,
      updated_at
    `)
    .eq("owner_id", user.id)
    .order("updated_at", {
      ascending: false,
    });

  if (error) throw error;

  return data;
}