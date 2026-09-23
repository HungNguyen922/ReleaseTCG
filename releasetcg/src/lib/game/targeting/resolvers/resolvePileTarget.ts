import { EngineContext } from "@/lib/game/EngineContext";

import { PileTarget } from "../models";

import { findPile } from "@/lib/game/queries";

export function resolvePileTarget(
    context: EngineContext,
    target: PileTarget,
) {

    return findPile(

        context,

        target.reference,

    );

}