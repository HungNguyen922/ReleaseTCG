import {
    EngineContext,
} from "@/lib/game/EngineContext";

import {
    GateReference,
} from "@/lib/game/refs";

import {
    findGate,
} from "@/lib/game/queries";

export function canTargetGate(
    context: EngineContext,
    reference: GateReference,
): boolean {

    return findGate(

        context,

        reference,

    ) !== null;

}