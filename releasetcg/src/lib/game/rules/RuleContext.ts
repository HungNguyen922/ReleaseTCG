import { CardRegistry } from "@/lib/game/registry";
import { GameState } from "../models";

export interface RuleContext {
    state: GameState;

    cards: CardRegistry;
}