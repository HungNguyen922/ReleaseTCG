import { DrawCardsOperation } from "./DrawCardsOperation";
import { DamagePlayerOperation } from "./DamagePlayerOperation";

export type GameOperation =
    | DrawCardsOperation
    | DamagePlayerOperation;