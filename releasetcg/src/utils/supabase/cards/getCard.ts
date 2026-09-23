import { createClient } from "@/utils/supabase/server";
import type { DatabaseCard } from "@/types/cards";

export async function getCard(id: string): Promise<DatabaseCard | null> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("cards")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (error || !data) return null;

  return data as DatabaseCard;
}