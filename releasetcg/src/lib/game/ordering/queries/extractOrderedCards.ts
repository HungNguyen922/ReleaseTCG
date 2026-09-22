import {
    EngineContext,
} from "@/lib/game/EngineContext";

import {
    CardInstance,
} from "@/lib/game/models";

import {
    CardOrderingResponse,
} from "../models/CardOrderingResponse";

import {
    findCard,
} from "@/lib/game/queries";

export function extractOrderedCards(

    context: EngineContext,

    response: CardOrderingResponse,

): CardInstance[] {

    return response.cards.map(

        reference => {

            const location = findCard(

                context,

                reference,

            );

            if (!location) {

                throw new Error(

                    `Card "${reference.id}" no longer exists.`,

                );

            }

            return location.card;

        },

    );

}