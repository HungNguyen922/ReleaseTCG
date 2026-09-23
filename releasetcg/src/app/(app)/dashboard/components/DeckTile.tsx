"use client";

import Link from "next/link";
import Image from "next/image";

import type { DeckSummary } from "@/types/decks";
import { getCardImageUrl } from "@/lib/images/getCardImageUrl";

import DeckTileMenu from "./DeckTileMenu";

type Props = { deck: DeckSummary };

export default function DeckTile({ deck }: Props) {
  const hasCover = deck.coverCardNumber && deck.coverSetName;

  return (
    <div className="relative">
      <div
        className="absolute right-2 top-2 z-20"
        onClick={(e) => e.stopPropagation()}
      >
        <DeckTileMenu deck={deck} />
      </div>

      <Link href={`/deckbuilder/${deck.id}`}>
        <div className="group overflow-hidden rounded-xl border bg-card transition-all hover:-translate-y-1 hover:border-primary hover:shadow-lg">
          <div className="relative aspect-[16/9] bg-muted">
            {hasCover ? (
              <Image
                fill
                src={getCardImageUrl({
                  cardNumber: deck.coverCardNumber,
                  setName: deck.coverSetName,
                })}
                alt={deck.name || "Deck cover"}
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            ) : (
              <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
                {deck.name || "Untitled Deck"}
              </div>
            )}
          </div>

          <div className="space-y-1 p-3">
            <h3 className="truncate font-semibold">
              {deck.name || "Untitled Deck"}
            </h3>
          </div>
        </div>
      </Link>
    </div>
  );
}