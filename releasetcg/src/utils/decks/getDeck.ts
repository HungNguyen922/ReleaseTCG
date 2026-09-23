import type { Deck } from "@/types/decks";

export async function getDeck(id: string): Promise<Deck> {
  const response = await fetch(`/api/decks/${id}`);

  if (!response.ok) {
    throw new Error("Failed to load deck.");
  }

  return response.json();
}