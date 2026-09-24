"use client";

import Image from "next/image";

import type { PlayableCard } from "@/types/cards";

import { getCardImageUrl } from "@/lib/images/getCardImageUrl";
import { PaletteChips } from "./PaletteChips";
import { StatChips } from "./StatChips";

type Props = {
  card: PlayableCard;
};

export default function CardInspector({ card }: Props) {
  return (
    <div className="flex gap-3 p-3 h-full overflow-hidden">

      {/* LEFT: IMAGE */}
      <div className="w-[72px] flex-shrink-0">
        {card.cardNumber && card.setName && (
            <Image
                src={getCardImageUrl(card)}
                alt={card.name}
                width={180}
                height={252}
                className="rounded-md object-cover"
            />
        )}
      </div>

      {/* RIGHT: DETAILS */}
      <div className="flex-1 overflow-y-auto space-y-2 pr-1">
            <h2 className="text-lg font-bold">{card.name}</h2>

            <PaletteChips
                palette={card.colors}
                size="md"
            />

            <StatChips
                power={card.power}
                bulk={card.bulk}
                size="md"
            />

            {card.trait && (
                <div className="text-sm">
                <span className="font-medium">Trait:</span> {card.trait}
                </div>
            )}

            {card.effect1 && (
                <p className="text-sm whitespace-pre-wrap">
                {card.effect1}
                </p>
            )}

            {card.effect2 && (
                <p className="text-sm whitespace-pre-wrap">
                {card.effect2}
                </p>
            )}
      </div>
      
    </div>
  );
}