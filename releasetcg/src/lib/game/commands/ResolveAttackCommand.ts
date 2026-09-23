import { StackReference } from "@/lib/game/refs";

import { BaseCommand } from "./BaseCommand";
import { CommandType } from "./CommandType";

export interface ResolveAttackCommand extends BaseCommand {
    type: CommandType.ResolveAttack;

    attacker: StackReference;
}

export function createResolveAttackCommand(
    attacker: StackReference,
): ResolveAttackCommand {
    return {
        type: CommandType.ResolveAttack,
        attacker,
    };
}