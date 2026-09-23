import { BaseGameAction } from "./BaseGameAction";
import { ActionCategory } from "../models";

export interface BasePlayAction extends BaseGameAction {

    category: ActionCategory.Play;

}