import {
    PlayerReference,
    GateReference,
    CardReference,
} from "@/lib/game/refs";

import { BaseCommand } from "./BaseCommand";
import { CommandType } from "./CommandType";

export interface OpenParryWindowCommand extends BaseCommand {
    type: CommandType.OpenParryWindow;

    attacker: PlayerReference;

    gates: GateReference[];

    cards: CardReference[];
}

export function createOpenParryWindowCommand(
    attacker: PlayerReference,
    gates: GateReference[],
    cards: CardReference[]
): OpenParryWindowCommand {
    return {
        type: CommandType.OpenParryWindow,
        attacker,
        gates,
        cards,
    };
}