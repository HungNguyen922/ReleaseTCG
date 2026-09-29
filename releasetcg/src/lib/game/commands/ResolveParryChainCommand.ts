import { BaseCommand } from "./BaseCommand";
import { CommandType } from "./CommandType";

export interface ResolveParryChainCommand extends BaseCommand {
    type: CommandType.ResolveParryChain;
}

export function createResolveParryChainCommand(): ResolveParryChainCommand {
    return {
        type: CommandType.ResolveParryChain,
    };
}