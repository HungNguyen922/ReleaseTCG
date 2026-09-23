import { IntentType } from "./IntentType";
import { GameIntent } from "./GameIntent";

export interface SetCardIntent extends GameIntent {
    type: IntentType.SetCard;

    cardId: string;
}