/*
    This Generates the actual deck code from the compressed deck data string from decodeDeck
*/

import { DeckExport } from "@/types/decks"
import { checksum } from "./checksum";
import { encodeDeck } from "./encodeDeck"

export function encodeDeckCode(
  deck: DeckExport
): string {
  const payload = encodeDeck(deck);

  return `${payload}.${checksum(payload)}`;
}