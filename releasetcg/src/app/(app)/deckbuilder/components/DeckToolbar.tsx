"use client";

import { CardFilters } from "@/app/(app)/components/cards/CardFilters";
import type { CardFilterValues } from "@/types/cards";

type Props = {
  filters: CardFilterValues;
  setFilters: React.Dispatch<
    React.SetStateAction<CardFilterValues>
  >;
};

export default function DeckToolbar({
  filters,
  setFilters,
}: Props) {
  return (
      <CardFilters
        filters={filters}
        setFilters={setFilters}
        options={{
          showPool: false,
          showPower: true,
          showBulk: true,
          showColor: true,
        }}
      />
  );
}