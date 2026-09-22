import { ActionCategory } from "../models";
import { ActionType } from "./ActionType";
import { PlayerReference } from "../refs";

export interface BaseGameAction {

    type: ActionType;

    category: ActionCategory;

    player: PlayerReference;

}