import { DatabaseCard, PlayableCard } from "@/types/cards";

export function toPlayableCard(card: DatabaseCard): PlayableCard {
  return {
    id: card.id,
    name: card.Name,

    power: card.Power,
    bulk: card.Bulk,

    colors: [
      card.Color1,
      card.Color2,
      card.Color3,
      card.Color4,
    ].filter((c): c is string => c !== null),

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
  };
}