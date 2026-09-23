import {
    EngineContext,
} from "@/lib/game/EngineContext";

import {
    CardReference,
} from "@/lib/game/refs";

import {
    findCard,
} from "@/lib/game/queries";

export function canTargetCard(
    context: EngineContext,
    reference: CardReference,
): boolean {

    return findCard(

        context,

        reference,

    ) !== null;

}