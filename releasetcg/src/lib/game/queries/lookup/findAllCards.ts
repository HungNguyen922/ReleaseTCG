import { EngineContext } from "@/lib/game/EngineContext";

import {
    LocationType,
} from "@/lib/game/models";

import {
    CardLocation,
} from "../CardLocation";

export function findAllCards(
    context: EngineContext,
): CardLocation[] {

    const cards: CardLocation[] = [];

    //
    // Search every pile.
    //

    for (const pile of context.state.piles) {

        pile.cards.forEach(

            (card, position) => {

                cards.push({

                    card,

                    reference: {

                        id: card.id,

                    },

                    location: {

                        locationType:
                            LocationType.Pile,

                        pileType:
                            pile.pileType,

                        pileId:
                            pile.id,

                        playerId:
                            pile.ownerId,

                    },

                    position,

                });

            },

        );

    }

    //
    // Search every gate.
    //

    for (const gate of context.state.board.gateZones) {

        if (!gate.stack) {
            continue;
        }

        gate.stack.cards.forEach(

            (card, position) => {

                cards.push({

                    card,

                    reference: {

                        id: card.id,

                    },

                    location: {

                        locationType:
                            LocationType.Gate,

                        side:
                            gate.side,

                        position:
                            gate.position,

                    },

                    position,

                });

            },

        );

    }

    //
    // Search every set zone.
    //

    for (const zone of context.state.board.setZones) {

        if (!zone.card) {
            continue;
        }

        cards.push({

            card: zone.card,

            reference: {

                id: zone.card.id,

            },

            location: {

                locationType:
                    LocationType.Set,

                side:
                    zone.side,

                position:
                    zone.position,

            },

            position: 0,

        });

    }

    return cards;

}