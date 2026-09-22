import { IntentType } from "./IntentType";
import { GameIntent } from "./GameIntent";

export interface ConstructIntent extends GameIntent {
    type: IntentType.Construct;

    cardIds: string[];

    targetGateId: string;
}