import { GateZone } from "../../models";
import { GateReference } from "../../refs";

import { EngineContext } from "../../EngineContext";

export function findGate(
    context: EngineContext,
    reference: GateReference,
): GateZone | null {
    return (
        context.state.board.gateZones.find(
            gate =>
                gate.side === reference.side &&
                gate.position === reference.position,
        ) ?? null
    );
}