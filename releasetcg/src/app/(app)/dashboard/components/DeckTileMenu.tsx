"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import type { DeckSummary } from "@/types/decks";

import {
  getDeck,
  deleteDeck,
  exportDeck,
  toDeckExport,
} from "@/utils/decks";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  HugeiconsIcon,
} from "@hugeicons/react";

import {
  Menu01FreeIcons,
} from "@hugeicons/core-free-icons";

type Props = {
  deck: DeckSummary;
};

export default function DeckTileMenu({
  deck,
}: Props) {
  const router = useRouter();

  async function handleExport() {
    try {
      const fullDeck = await getDeck(deck.id);

      const code = exportDeck(
        toDeckExport(fullDeck)
      );

      try {
        await navigator.clipboard.writeText(code);
        alert("Deck code copied to clipboard!");
      } catch {
        alert(code);
      }
    } catch (error) {
      alert(
        error instanceof Error
          ? error.message
          : "Failed to export deck."
      );
    }
  }

  async function handleDelete() {
    if (!confirm(`Delete "${deck.name}"?`)) {
      return;
    }

    try {
      await deleteDeck(deck.id);

      router.refresh();
    } catch (error) {
      alert(
        error instanceof Error
          ? error.message
          : "Failed to delete deck."
      );
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          onClick={(e) => e.stopPropagation()}
          className="rounded-full bg-background/80 p-1.5 backdrop-blur transition-colors hover:bg-background"
        >
          <HugeiconsIcon
            icon={Menu01FreeIcons}
            size={18}
          />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">

        <DropdownMenuItem asChild>
          <Link href={`/deckbuilder/${deck.id}`}>
            Edit
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem onClick={handleExport}>
          Export
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          className="text-destructive"
          onClick={handleDelete}
        >
          Delete
        </DropdownMenuItem>

      </DropdownMenuContent>
    </DropdownMenu>
  );
}