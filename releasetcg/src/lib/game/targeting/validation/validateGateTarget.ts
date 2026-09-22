import {
    EngineContext,
} from "@/lib/game/EngineContext";

import {
    GateTarget,
} from "../models";

import {
    resolveGateTarget,
} from "../resolvers";

export function validateGateTarget(
    context: EngineContext,
    target: GateTarget,
): boolean {

    const gate = resolveGateTarget(
        context,
        target,
    );

    return gate !== null;

}