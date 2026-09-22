import {
    GateReference,
} from "../refs";

import {
    CommandType,
} from "./CommandType";

export interface MoveGateCommand {

    type: CommandType.MoveGate;

    source: GateReference;

    destination: GateReference;

}

export function createMoveGateCommand(
    source: GateReference,
    destination: GateReference,
): MoveGateCommand {

    return {

        type: CommandType.MoveGate,

        source,

        destination,

    };

}