import { CommandType } from "./CommandType";
import { PileState } from "../models";

export interface CreatePileCommand {
    type: CommandType.CreatePile;

    pile: PileState;
}

export function createCreatePileCommand(
    pile: PileState,
): CreatePileCommand {
    return {
        type: CommandType.CreatePile,
        pile,
    };
}