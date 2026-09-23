import { CardDefinition } from "../models";

export interface CardRegistry {
    getCard(id: string): CardDefinition | null;
}