import { Deck } from "./decks";

export type CommunityDeckRow = {
  id: string;
  owner_id: string;

  title: string;
  description: string;

  deck: Deck;

  cover_card_id: string | null; 

  is_public: boolean;

  created_at: string;
  updated_at: string;
};

export type CommunityDeckSummary = {
  id: string;

  title: string;
  description: string;

  author: string;

  coverCardId: string | null;
  coverCardNumber: string | null;
  coverSetName: string | null;

  likes: number;
  comments: number;

  createdAt: string;
};

export type CommunityDeck = {
  id: string;

  title: string;
  description: string;

  deck: Deck;

  author: string;
  ownerId: string;

  coverCardId: string | null;
  coverCardNumber: string | null;
  coverSetName: string | null;

  likes: number;
  comments: number;

  createdAt: string;
  updatedAt: string;
};

export type CommunityFilter = "newest" | "popular" | "mine";