export type DeckEntry = {
  cardId: string;
  count: number;
};

export type Deck = {
  id?: string;
  name: string;

  mainDeck: DeckEntry[];
  extraDeck: DeckEntry[];
};

export type SavedDeck = {
  id: string;
  ownerId: string;

  name: string;

  mainDeck: DeckEntry[];
  extraDeck: DeckEntry[];

  createdAt: string;
  updatedAt: string;
};

export type DeckSummary = {
  id: string;
  name: string;

  updatedAt: string;
};

export type DeckExport = {
    mainDeck: DeckEntry[];

    extraDeck: DeckEntry[];
}

export type DeckValidationResult = {
  valid: boolean;
  errors: string[];
};  

export type GetImportedDeckResult = {
  deck: Deck | null;
  validation: DeckValidationResult;
};