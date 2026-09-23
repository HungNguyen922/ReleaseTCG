import {
    EngineContext,
} from "@/lib/game";

import {
    PileReference,
    createPublicPileReference,
} from "@/lib/game/refs";

export function findAvailableDrawPiles(

    context: EngineContext,

): PileReference[] {

    //
    // Alpha:
    // Only the Public Pile.
    //

    return [

        createPublicPileReference(),

    ];

}