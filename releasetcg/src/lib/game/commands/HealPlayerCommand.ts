import { PlayerReference } from "@/lib/game/refs";

import { BaseCommand } from "./BaseCommand";
import { CommandType } from "./CommandType";

export interface HealPlayerCommand extends BaseCommand {
    type: CommandType.HealPlayer;

    player: PlayerReference;

    amount: number;
}