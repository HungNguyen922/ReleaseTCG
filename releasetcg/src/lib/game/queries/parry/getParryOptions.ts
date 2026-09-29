import { EngineContext } from "@/lib/game/EngineContext";

import {
    CardInstance,
    PileType,
} from "@/lib/game/models";

import {
    findCardDefinition,
} from "../lookup";

export function getParryOptions(
    context: EngineContext,
    playerId: string,
): CardInstance[] {

    const parry = context.state.parry;

    if (!parry) {

        return [];

    }

    const hand =
        context.state.piles.find(
            pile =>
                pile.pileType === PileType.Hand &&
                pile.ownerId === playerId,
        );

    if (!hand) {

        return [];

    }

    return hand.cards.filter(
        card =>
            findCardDefinition(
                context,
                card,
            ).bulk === parry.requiredBulk,
    );

}