import { CardForm } from "./types";
import type { DatabaseCard } from "@/types/cards";

export function normalizeCard(card: DatabaseCard): CardForm {
  return {
    name: card.Name,
    power: card.Power,
    bulk: card.Bulk,

    color1: card.Color1 ?? "",
    color2: card.Color2 ?? "",
    color3: card.Color3 ?? "",
    color4: card.Color4 ?? "",

    trait: card.Trait ?? "",

    effect1: card.Effect1 ?? "",
    effect2: card.Effect2 ?? "",

    clarify1: card.Clarify1 ?? "",
    clarify2: card.Clarify2 ?? "",
    clarify3: card.Clarify3 ?? "",

    flavor: card.Flavor ?? "",
    inspiration: card.Inspiration ?? "",

    artist: card.Artist ?? "",
    cardNumber: card.CardNumber ?? "",
    setName: card.SetName ?? "",

    pool: card.pool ?? "",
  };
}