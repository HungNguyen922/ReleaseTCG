import { CommandType } from "./CommandType";
import { PileReference } from "../refs";

export interface DestroyPileCommand {
    type: CommandType.DestroyPile;

    pile: PileReference;
}

export function createDestroyPileCommand(
    pile: PileReference,
): DestroyPileCommand {
    return {
        type: CommandType.DestroyPile,
        pile,
    };
}