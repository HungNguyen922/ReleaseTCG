import { createClient } from "@/utils/supabase/server";

import {
  DatabaseCard,
  PlayableCard,
} from "@/types/cards";

import { toPlayableCard } from "@/lib/cards/cardMapper";

export async function getPublicCards(): Promise<PlayableCard[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("cards")
    .select(`
      id,
      Name,
      Power,
      Bulk,
      Color1,
      Color2,
      Color3,
      Color4,
      Trait,
      Effect1,
      Effect2,
      Clarify1,
      Clarify2,
      Clarify3,
      CardNumber,
      SetName,
      Artist,
      Art,
      Flavor,
      Inspiration,
      created_at,
      updated_at,
      created_by,
      updated_by,
      pool
    `);

  if (error) {
    console.error(error);
    return [];
  }

  return (data as DatabaseCard[]).map(toPlayableCard);
}