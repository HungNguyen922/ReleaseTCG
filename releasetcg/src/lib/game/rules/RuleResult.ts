import { GameAction } from "@/lib/game/actions";

export interface RuleResult {

    success: boolean;

    actions: GameAction[];

    errors: string[];

}