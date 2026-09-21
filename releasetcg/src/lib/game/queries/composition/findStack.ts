import { EngineContext } from "@/lib/game/EngineContext";

import { GateStack } from "../../models";
import { StackReference } from "../../refs";

import { findGate } from "../lookup/findGate";

export function findStack(
    context: EngineContext,
    reference: StackReference,
): GateStack | null {
    return findGate(
        context,
        reference.gate,
    )?.stack ?? null;
}