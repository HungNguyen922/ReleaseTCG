"use client";

import { useMemo, useState } from "react";

import { PlayableCard } from "@/types/cards";
import { GalleryFilterState, GallerySort, SortDirection } from "../types";

export function useGalleryFilters(cards: PlayableCard[]) {
  const [filters, setFilters] = useState<GalleryFilterState>({
    search: "",
    setName: "",
    color: "",
    sort: "name",
    direction: "asc",
  });

  function setSearch(search: string) {
    setFilters((prev) => ({ ...prev, search }));
  }

  function setSetName(setName: string) {
    setFilters((prev) => ({ ...prev, setName }));
  }

  function setColor(color: string) {
    setFilters((prev) => ({ ...prev, color }));
  }

  function setSort(sort: GallerySort) {
    setFilters((prev) => ({ ...prev, sort }));
  }

  function setDirection(direction: SortDirection) {
    setFilters((prev) => ({ ...prev, direction }));
  }

  const filteredCards = useMemo(() => {
    const filtered = cards.filter((card) => {
      if (
        filters.search &&
        !card.name.toLowerCase().includes(filters.search.toLowerCase())
      ) {
        return false;
      }

      if (filters.setName && card.setName !== filters.setName) {
        return false;
      }

      if (filters.color && !card.colors.includes(filters.color)) {
        return false;
      }

      return true;
    });

    filtered.sort((a, b) => {
      let comparison = 0;

      switch (filters.sort) {
        case "power":
          comparison = a.power - b.power;
          break;
        case "bulk":
          comparison = a.bulk - b.bulk;
          break;
        case "setName":
          comparison = (a.setName ?? "").localeCompare(b.setName ?? "");
          break;
        default:
          comparison = a.name.localeCompare(b.name);
      }

      return filters.direction === "asc" ? comparison : -comparison;
    });

    return filtered;
  }, [cards, filters]);

  return { filters, filteredCards, setSearch, setSetName, setColor, setSort, setDirection };
}