export type CardPool =
  | "draft"
  | "private"
  | "beta"
  | "public";

export type CardCore = {
  id: string;
  name: string;

  power: number;
  bulk: number;

  trait: string | null;
  effect1: string | null;
  effect2: string | null;
  clarify1: string | null;
  clarify2: string | null;
  clarify3: string | null;

  artist: string | null;
  cardNumber: string | null;
  setName: string | null;

  flavor: string | null;
  inspiration: string | null;

};

export type PlayableCard = CardCore & {
  colors: string[];
};

/**
 * Represents the complete row stored in Supabase.
 * Extends Card with metadata only needed by the database/admin tools.
 */
export type DatabaseCard = {
  id: string;
  Name: string;

  Power: number;
  Bulk: number;

  Color1: string | null;
  Color2: string | null;
  Color3: string | null;
  Color4: string | null;

  Trait: string | null;
  Effect1: string | null;
  Effect2: string | null;
  Clarify1: string | null;
  Clarify2: string | null;
  Clarify3: string | null;

  CardNumber: string | null;
  SetName: string | null;
  Artist: string | null;
  Art: string | null;
  Flavor: string | null;
  Inspiration: string | null;

  created_at: string;
  updated_at: string;
  created_by: string | null;
  updated_by: string | null;

  pool: CardPool;
};

/**
 * Lightweight representation for the admin table.
 * Avoids loading every field unnecessarily.
 */
export type AdminCardSummary = CardCore & {
  pool: CardPool;
  palette: string[];
};

export type CardFilterValues = {
  search: string;
  pool?: string;
  power: string;
  bulk: string;
  color: string;
};