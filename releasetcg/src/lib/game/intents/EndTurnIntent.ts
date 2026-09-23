import { IntentType } from "./IntentType";
import { GameIntent } from "./GameIntent";

export interface EndTurnIntent extends GameIntent {
    type: IntentType.EndTurn;
}