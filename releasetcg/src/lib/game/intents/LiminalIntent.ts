import { IntentType } from "./IntentType";
import { GameIntent } from "./GameIntent";

export interface LiminalIntent extends GameIntent {
    type: IntentType.Liminal;

    sourceGateIds: [string, string];

    destinationGateId: string;

    cardId: string;
}