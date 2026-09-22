import { EngineContext } from "@/lib/game/EngineContext";

import { GateTarget } from "../models";

import { findGate } from "@/lib/game/queries";

export function resolveGateTarget(
    context: EngineContext,
    target: GateTarget,
) {

    return findGate(

        context,

        target.reference,

    );

}