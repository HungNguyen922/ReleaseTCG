import {
    TargetContext,
} from "@/lib/game/targeting/models";

import {
    findAllCards,
} from "@/lib/game/queries";

import {
    CardTarget,
} from "../models";

import {
    TargetType,
} from "../models/TargetType";

export function generateCardTargets(
    targetContext: TargetContext,
): CardTarget[] {

    return findAllCards(
        targetContext.engine,
    ).map(location => ({

        type: TargetType.Card,

        reference: {
            id: location.card.id,
        },

    }));
}