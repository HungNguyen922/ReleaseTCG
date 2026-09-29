import {
    PlayerReference,
    CardReference,
} from "@/lib/game/refs";

import { BaseCommand } from "./BaseCommand";
import { CommandType } from "./CommandType";

export interface PlayParryCommand extends BaseCommand {
    type: CommandType.PlayParry;

    player: PlayerReference;

    card: CardReference;
}

export function createPlayParryCommand(
    player: PlayerReference,
    card: CardReference
): PlayParryCommand {
    return {
        type: CommandType.PlayParry,
        player,
        card,
    };
}