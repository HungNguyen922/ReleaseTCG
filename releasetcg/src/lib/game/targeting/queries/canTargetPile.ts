import {
    EngineContext,
} from "@/lib/game/EngineContext";

import {
    PileReference,
} from "@/lib/game/refs";

import {
    findPile,
} from "@/lib/game/queries";

export function canTargetPile(
    context: EngineContext,
    reference: PileReference,
): boolean {

    return findPile(

        context,

        reference,

    ) !== null;

}