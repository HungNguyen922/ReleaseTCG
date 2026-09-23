import { PlayerReference } from "@/lib/game/refs";

import { BaseCommand } from "./BaseCommand";
import { CommandType } from "./CommandType";

export interface EndPriorityCommand extends BaseCommand {
    type: CommandType.EndPriority;

    player: PlayerReference;
}

export function createEndPriorityCommand(
    player: PlayerReference,
): EndPriorityCommand {
    return {
        type: CommandType.EndPriority,
        player,
    };
}