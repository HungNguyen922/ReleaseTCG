import { GateReference } from "@/lib/game/refs";

import { BaseCommand } from "./BaseCommand";
import { CommandType } from "./CommandType";


export interface CreateGateCommand extends BaseCommand {

    type: CommandType.CreateGate;

    gate: GateReference;

}


export function createCreateGateCommand(
    gate: GateReference,
): CreateGateCommand {

    return {

        type: CommandType.CreateGate,

        gate,

    };

}