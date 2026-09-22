import {
    EngineContext,
} from "@/lib/game/EngineContext";

import {
    LocationType,
} from "@/lib/game/models";

import {
    PileTarget,
} from "../models";

import {
    TargetType,
} from "../models/TargetType";

export function generatePileTargets(
    context: EngineContext,
): PileTarget[] {

    return context.state.piles.map(

        pile => ({

            type: TargetType.Pile,

            reference: {

                locationType: LocationType.Pile,

                pileType: pile.pileType,

                playerId: pile.ownerId,

                pileId: pile.id,

            },

        }),

    );

}