"use client";

import Image from "next/image";

import type { DeckSummary } from "@/types/decks";

import { Button } from "@/components/ui/button";

import { getCardImageUrl } from "@/lib/images/getCardImageUrl";

type Props = {
  deck: DeckSummary;
  onSelect: (deck: DeckSummary) => void;
};

export default function PublishDeckTile({
  deck,
  onSelect,
}: Props) {
  return (
    <div className="flex items-center gap-4 rounded-lg border p-3">

      <div className="relative h-20 w-32 overflow-hidden rounded-md bg-muted">
        {deck.leaderImage ? (
          <Image
            fill
            src={getCardImageUrl(deck.leaderImage)}
            alt={deck.leaderName ?? deck.name}
            className="object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-xs text-muted-foreground">
            No Leader
          </div>
        )}
      </div>

      <div className="flex-1">
        <h3 className="font-semibold">
          {deck.name}
        </h3>

        <p className="text-sm text-muted-foreground">
          {deck.leaderName ?? "No Leader"}
        </p>
      </div>

      <Button
        onClick={() => onSelect(deck)}
      >
        Select
      </Button>

    </div>
  );
}