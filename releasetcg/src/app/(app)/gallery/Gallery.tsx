"use client";

import { useState } from "react";

import { PlayableCard } from "@/types/cards";
import { CardModal } from "@/features/cards/CardModal";
import { useGalleryFilters } from "./hooks/useGalleryFilters";
import { GalleryFilters } from "./components/GalleryFilters";
import { GalleryGrid } from "./components/GalleryGrid";

type Props = {
  initialCards: PlayableCard[];
};

export function Gallery({ initialCards }: Props) {
  const {
    filters,
    filteredCards,
    setSearch,
    setSetName,
    setColor,
    setSort,
    setDirection,
  } = useGalleryFilters(initialCards);

  const [selectedCard, setSelectedCard] = useState<PlayableCard | null>(null);

  return (
    <div className="flex h-full flex-col">
      <GalleryFilters
        filters={filters}
        onSearch={setSearch}
        onSetName={setSetName}
        onColor={setColor}
        onSort={setSort}
        onDirection={setDirection}
      />

      <GalleryGrid cards={filteredCards} onCardClick={setSelectedCard} />

      <CardModal
        card={selectedCard}
        open={selectedCard !== null}
        onOpenChange={(open) => {
          if (!open) setSelectedCard(null);
        }}
      />
    </div>
  );
}