import {
    LocationType,
} from "../../models";

import {
    CardReference,
} from "../../refs";

import { EngineContext } from "../../EngineContext";

import { CardLocation } from "../CardLocation";

import { searchCards } from "../helpers/searchCards";

export function findCard(
    context: EngineContext,
    reference: CardReference,
): CardLocation | null {

    //
    // Search every pile.
    //

    for (const pile of context.state.piles) {

        const result = searchCards(
            pile.cards,
            {
                locationType: LocationType.Pile,
                pileType: pile.pileType,
                pileId: pile.id,
                playerId: pile.ownerId,
            },
            reference,
        );

        if (result) {
            return result;
        }

    }

    //
    // Search every gate stack.
    //

    for (const gate of context.state.board.gateZones) {

        if (!gate.stack) {
            continue;
        }

        const result = searchCards(
            gate.stack.cards,
            {
                locationType: LocationType.Gate,
                side: gate.side,
                position: gate.position,
            },
            reference,
        );

        if (result) {
            return result;
        }

    }

    //
    // Search every set zone.
    //

    for (const zone of context.state.board.setZones) {

        if (!zone.card) {
            continue;
        }

        if (zone.card.id !== reference.id) {
            continue;
        }

        return {
            card: zone.card,
            reference,
            location: {
                locationType: LocationType.Set,
                side: zone.side,
                position: zone.position,
            },
            position: 0,
        };

    }

    return null;

}