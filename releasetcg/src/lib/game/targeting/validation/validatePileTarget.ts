import {
    EngineContext,
} from "@/lib/game/EngineContext";

import {
    PileTarget,
} from "../models";

import {
    resolvePileTarget,
} from "../resolvers";

export function validatePileTarget(
    context: EngineContext,
    target: PileTarget,
): boolean {

    const pile = resolvePileTarget(
        context,
        target,
    );

    return pile !== null;

}