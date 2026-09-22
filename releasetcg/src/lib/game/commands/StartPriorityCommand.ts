import { PlayerReference } from "@/lib/game/refs";

import { BaseCommand } from "./BaseCommand";
import { CommandType } from "./CommandType";

export interface StartPriorityCommand extends BaseCommand {
    type: CommandType.StartPriority;

    player: PlayerReference;
}

export function createStartPriorityCommand(
    player: PlayerReference,
): StartPriorityCommand {
    return {
        type: CommandType.StartPriority,
        player,
    };
}