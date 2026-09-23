import { IntentType } from "./IntentType";
import { GameIntent } from "./GameIntent";

export interface PassIntent extends GameIntent {
    type: IntentType.Pass;
}