import { createClient } from "@/utils/supabase/server";
import GameController from "@/game-ui/GameController";
import { toCardDefinition } from "@/lib/game/cards/toCardDefinition";
import { PLAYABLE_CARD_SELECT } from "@/lib/cards/queries"; // or whatever select the game module needs

export default async function GamePage() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("cards")
    .select(PLAYABLE_CARD_SELECT);

  if (error) {
    console.error(error);
  }

  const cardDefinitions = (data ?? []).map(toCardDefinition);

  return <GameController cardDefinitions={cardDefinitions} />;
}