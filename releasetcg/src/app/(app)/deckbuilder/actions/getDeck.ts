"use server";

import { createClient } from "@/utils/supabase/server";

export async function getDeck(id: string) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("decks")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw error;

  return data;
}