import GameController from "@/game-ui/GameController";
import { toCardDefinition } from "@/lib/game/cards/toCardDefinition";
import { getEngineCards } from "@/utils/supabase/cards/getEngineCards";

export default async function GamePage() {
  const cards = await getEngineCards();

  const cardDefinitions = cards.map(toCardDefinition);

  return <GameController cardDefinitions={cardDefinitions} />;
}