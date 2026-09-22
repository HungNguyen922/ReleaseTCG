import { PlayerReference } from "@/lib/game/refs";

import { BaseCommand } from "./BaseCommand";
import { CommandType } from "./CommandType";

export interface DamagePlayerCommand extends BaseCommand {
    type: CommandType.DamagePlayer;

    player: PlayerReference;

    amount: number;
}

export function createDamagePlayerCommand(
    player: PlayerReference,
    amount: number,
): DamagePlayerCommand {
    return {
        type: CommandType.DamagePlayer,
        player,
        amount,
    };
}