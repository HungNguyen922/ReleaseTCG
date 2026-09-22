import { CardEffectDefinition } from "./CardEffectDefinition";

export interface LeaderDefinition {
    id: string;

    name: string;

    health: number;

    effect: CardEffectDefinition | null;
}