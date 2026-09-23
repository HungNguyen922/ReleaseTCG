"use client";

import { useEffect, useState } from "react";

import type {
  CommunityDeckSummary,
  CommunityFilter,
} from "@/types/community";

import { listCommunityDecks } from "@/utils/community";

type Props = {
  search: string;
  filter: CommunityFilter;
};

export function useCommunityDecks({ search, filter }: Props) {
  const [decks, setDecks] = useState<CommunityDeckSummary[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      setLoading(true);

      try {
        const decks = await listCommunityDecks({ search, filter });
        setDecks(decks);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [search, filter]);

  return { decks, loading };
}