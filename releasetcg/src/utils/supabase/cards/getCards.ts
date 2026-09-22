// src/utils/supabase/cards/getCards.ts
import { createClient } from "@/utils/supabase/server";
import type { AdminCardSummary, DatabaseCard } from "@/types/cards";
import { PLAYABLE_CARD_SELECT } from "@/lib/cards/queries";

export async function getCards(): Promise<AdminCardSummary[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("cards")
    .select(PLAYABLE_CARD_SELECT);

  if (error || !data) {
    console.error(error);
    return [];
  }

  const rows = data as DatabaseCard[];

  return rows.map((card): AdminCardSummary => ({
    id: card.id,
    name: card.Name,

    power: card.Power,
    bulk: card.Bulk,

    trait: card.Trait,
    effect1: card.Effect1,
    effect2: card.Effect2,

    clarify1: card.Clarify1,
    clarify2: card.Clarify2,
    clarify3: card.Clarify3,

    artist: card.Artist,
    cardNumber: card.CardNumber,
    setName: card.SetName,

    flavor: card.Flavor,
    inspiration: card.Inspiration,

    palette: [
      card.Color1,
      card.Color2,
      card.Color3,
      card.Color4,
    ].filter(Boolean) as string[],

    pool: card.pool,
  }));
}