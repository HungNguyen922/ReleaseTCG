import { PlayerReference } from "../refs";
import { BaseCommand } from "./BaseCommand";
import { CommandType } from "./CommandType";

export interface EndTurnCommand extends BaseCommand {
    type: CommandType.EndTurn;

    player: PlayerReference;
}

export function createEndTurnCommand(
    player: PlayerReference,
): EndTurnCommand {
    return {
        type: CommandType.EndTurn,
        player,
    };
}