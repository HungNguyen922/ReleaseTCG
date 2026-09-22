import { IntentType } from "./IntentType";
import { GameIntent } from "./GameIntent";

export interface BurnIntent extends GameIntent {
    type: IntentType.Burn;

    cardId: string;

    targetGateId: string;
}