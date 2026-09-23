"use client";

import type { PlayableCard } from "@/types/cards";

import CommunityCardChip from "./CommunityCardChip";

type Props = {
  coverCard: PlayableCard | null;
  deckName: string;
  author: string;

  setHoveredCardId: (id: string | null) => void;
  setHoverAnchor: (anchor: DOMRect | null) => void;
};

export default function CommunityDeckHeader({
  coverCard,
  deckName,
  author,
  setHoveredCardId,
  setHoverAnchor,
}: Props) {
  return (
    <section className="flex items-start gap-4">
      {coverCard && (
        <CommunityCardChip
          card={coverCard}
          count={1}
          setHoveredCardId={setHoveredCardId}
          setHoverAnchor={setHoverAnchor}
        />
      )}

      <div className="min-w-0 flex-1">
        <h1 className="text-2xl font-bold leading-tight break-words">
          {deckName}
        </h1>

        <p className="mt-2 text-sm text-muted-foreground">by {author}</p>
      </div>
    </section>
  );
}