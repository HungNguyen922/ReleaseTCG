import {
    TargetContext,
} from "../models";

import {
    PileType,
} from "@/lib/game/models";

import {
    PileTarget,
} from "../models";

import {
    generatePileTargets,
} from "./generatePileTargets";

export function generateDrawTargets(
    targetContext: TargetContext,
): PileTarget[] {

    return generatePileTargets(

        targetContext.engine,

    ).filter(

        target =>

            target.reference.pileType === PileType.MainDeck ||

            target.reference.pileType === PileType.ExtraDeck ||

            target.reference.pileType === PileType.PublicPile ||

            target.reference.pileType === PileType.Gap,

    );

}