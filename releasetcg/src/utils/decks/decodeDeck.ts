/*
    Takes the compressed payload and decompresses it
*/
import { decompressFromEncodedURIComponent } from "lz-string";

import type { DeckExport } from "@/types/decks";

export function decodeDeck(
  payload: string
): DeckExport {
  const json =
    decompressFromEncodedURIComponent(payload);

  if (!json) {
    throw new Error("Invalid deck code.");
  }

  return JSON.parse(json) as DeckExport;
}