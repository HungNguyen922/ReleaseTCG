import { Deck } from "./decks";

export type CommunityDeckRow = {
  id: string;

  owner_id: string;

  title: string;
  description: string;

  deck: Deck;

  is_public: boolean;

  created_at: string;
  updated_at: string;
};

export type CommunityDeckSummary = {
  id: string;

  title: string;
  description: string;

  author: string;

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

  likes: number;
  comments: number;

  createdAt: string;
  updatedAt: string;
};

export type CommunityFilter =
  | "newest"
  | "popular"
  | "mine";