import { IntentType } from "./IntentType";
import { GameIntent } from "./GameIntent";

export interface BoundIntent extends GameIntent {
    type: IntentType.Bound;

    cardIds: string[];

    targetGateId: string;
}