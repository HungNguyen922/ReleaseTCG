import { PlayerReference } from "@/lib/game/refs";

import { BaseCommand } from "./BaseCommand";
import { CommandType } from "./CommandType";

export interface EnforceMaxHandCommand extends BaseCommand {
    type: CommandType.EnforceMaxHand;

    player: PlayerReference;
}

export function createEnforceMaxHandCommand(
    player: PlayerReference,
): EnforceMaxHandCommand {
    return {
        type: CommandType.EnforceMaxHand,
        player,
    };
}