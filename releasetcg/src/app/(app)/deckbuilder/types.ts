import type { PlayableCard } from "@/types/cards";

export type Zone = "main" | "extra";

export type CardCounts = Record<
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