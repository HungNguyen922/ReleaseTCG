import { BaseCommand } from "./BaseCommand";
import { CommandType } from "./CommandType";

export interface PassCommand extends BaseCommand {
    type: CommandType.Pass;
}

export function createPassCommand(): PassCommand {
    return {
        type: CommandType.Pass,
    };
}