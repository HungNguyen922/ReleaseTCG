import { CommandType } from "./CommandType";

import { PileReference } from "../refs";

export interface ShufflePileCommand {
    type: CommandType.ShufflePile;

    pile: PileReference;
}

export function createShufflePileCommand(
    pile: PileReference,
): ShufflePileCommand {
    return {
        type: CommandType.ShufflePile,
        pile,
    };
}