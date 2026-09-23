import { IntentType } from "./IntentType";
import { GameIntent } from "./GameIntent";

export interface ChainIntent extends GameIntent {
    type: IntentType.Chain;

    cardIds: string[];

    targetGateId: string;
}