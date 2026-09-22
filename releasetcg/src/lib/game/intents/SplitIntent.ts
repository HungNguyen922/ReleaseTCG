import { IntentType } from "./IntentType";
import { GameIntent } from "./GameIntent";

export interface SplitIntent extends GameIntent {
    type: IntentType.Split;

    pseudoPureCardIds: [string, string];

    targetGateIds: string[];
}