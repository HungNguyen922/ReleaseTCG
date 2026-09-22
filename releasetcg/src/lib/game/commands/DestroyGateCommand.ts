import { GateReference } from "@/lib/game/refs";

import { BaseCommand } from "./BaseCommand";
import { CommandType } from "./CommandType";

export interface DestroyGateCommand extends BaseCommand {
    type: CommandType.DestroyGate;

    gate: GateReference;
}