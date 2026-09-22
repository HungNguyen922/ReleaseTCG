import { CardColor } from "./CardColor";
import { CardTraitDefinition } from "./CardTraitDefinition";
import { Ability } from "@/lib/game/abilities";

export interface CardDefinition {
    id: string;
    name: string;
    power: number;
    bulk: number;
    colors: CardColor[];
    trait: CardTraitDefinition | null;
    abilities: Ability[];

    cardNumber: string | null;
    setName: string | null;
}