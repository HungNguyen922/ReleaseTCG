import { EngineContext } from "@/lib/game/EngineContext";

import { CardTarget } from "../models";

import { findCard } from "@/lib/game/queries";

export function resolveCardTarget(
    context: EngineContext,
    target: CardTarget,
) {

    return findCard(

        context,

        target.reference,

    );

}