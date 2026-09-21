/**
 * Serializes a deck into a string.
 * The output is later wrapped with a checksum.
 */

import type { DeckExport } from "@/types/decks";
import { compressToEncodedURIComponent } from "lz-string";

export function encodeDeck(
  deck: DeckExport
): string {
  return compressToEncodedURIComponent(
    JSON.stringify(deck)
  );
}
