import {
    PileState,
    PileType,
} from "../../models";

import {
    PileReference,
} from "../../refs";

import { EngineContext } from "../../EngineContext";

export function findPile(
    context: EngineContext,
    reference: PileReference,
): PileState | null {

    switch (reference.pileType) {

        case PileType.Hand:
        case PileType.MainDeck:
        case PileType.ExtraDeck:

            return (
                context.state.piles.find(
                    pile =>
                        pile.pileType === reference.pileType &&
                        pile.ownerId === reference.playerId,
                ) ?? null
            );

        case PileType.PublicPile:
        case PileType.Gap:

            return (
                context.state.piles.find(
                    pile => pile.pileType === reference.pileType,
                ) ?? null
            );

        case PileType.Temporary:
        case PileType.Effect:

            return (
                context.state.piles.find(
                    pile => pile.id === reference.pileId,
                ) ?? null
            );

        default:
            return null;

    }

}