import { EngineContext } from "@/lib/game/EngineContext";

import {

    LocationType,

    PileType,

} from "@/lib/game/models";

import {

    CardInstance,

} from "@/lib/game/models";

import {

    CardReference,

} from "@/lib/game/refs";

import {

    findCard,

} from "@/lib/game/queries";

export function resolvePlayableCards(

    context: EngineContext,

    playerId: string,

    references: CardReference[],

): CardInstance[] | null {

    const cards: CardInstance[] = [];

    for (const reference of references) {

        const result = findCard(

            context,

            reference,

        );

        if (!result) {

            return null;

        }

        if (

            result.location.locationType === LocationType.Pile

        ) {

            if (

                result.location.pileType !== PileType.Hand ||

                result.location.playerId !== playerId

            ) {

                return null;

            }

        }

        //
        // TODO:
        // Allow Set Zones here.
        //

        else {

            return null;

        }

        cards.push(

            result.card,

        );

    }

    return cards;

}