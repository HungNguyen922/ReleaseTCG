import type { PlayableCard } from "@/types/cards";
import type { DeckEntry } from "@/types/decks";

export type Zone = "main" | "extra";

export type CardCounts = Record
  string,
  {
    main: number;
    extra: number;
  }
>;

export type DeckCard = {
  card: PlayableCard;
  count: number;
};