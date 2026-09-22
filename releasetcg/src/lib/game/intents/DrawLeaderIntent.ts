import { IntentType } from "./IntentType";
import { GameIntent } from "./GameIntent";

export interface DrawLeaderIntent extends GameIntent {
    type: IntentType.DrawLeader;
}