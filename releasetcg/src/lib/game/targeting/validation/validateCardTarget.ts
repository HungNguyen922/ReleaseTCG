import {
    EngineContext,
} from "@/lib/game/EngineContext";

import {
    CardTarget,
} from "../models";

import {
    resolveCardTarget,
} from "../resolvers";

export function validateCardTarget(
    context: EngineContext,
    target: CardTarget,
): boolean {

    const card = resolveCardTarget(
        context,
        target,
    );

    return card !== null;

}