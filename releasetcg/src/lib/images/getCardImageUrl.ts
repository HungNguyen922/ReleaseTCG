import { PlayableCard } from "@/types/cards";

const SUPABASE_PROJECT_URL =
  "https://nelejiwidolomftgrcjt.supabase.co";

const BUCKET = "CardImages";

function buildCardImageFilename(card: PlayableCard): string {
  const num = card.cardNumber?.replace("/", "_");
  const set = card.setName;

  console.log("buildCardImageFilename", { num, set });
  if (!num || !set) return "1_81 - IRFO.png";

  const raw = `${num}-${set}.png`;   // keep the spaces exactly as your filenames use
  const encoded = encodeURIComponent(raw);

  return `${encoded}`;
}


export function getCardImageUrl(card: PlayableCard) {
  const fileName = buildCardImageFilename(card);
  console.log("getCardImageUrl", { fileName });
  const link = `${SUPABASE_PROJECT_URL}/storage/v1/object/public/${BUCKET}/${fileName}`;
  return link;
}