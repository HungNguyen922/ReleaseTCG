import type { DatabaseCard } from "@/types/cards";

export type { DatabaseCard };

export type CardForm = {
  name: string;
  power: number;
  bulk: number;

  color1: string;
  color2: string;
  color3: string;
  color4: string;

  trait: string;

  effect1: string;
  effect2: string;

  clarify1: string;
  clarify2: string;
  clarify3: string;

  flavor: string;
  inspiration: string;

  artist: string;
  cardNumber: string;
  setName: string;

  pool: string;
};

export type UpdateCardDTO = {
  id: string;
  data: CardForm;
};

export type UpdateCard = <K extends keyof CardForm>(
  key: K,
  value: CardForm[K]
) => void;