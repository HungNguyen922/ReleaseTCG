import {
    CardOrderingRequest,
} from "../models/CardOrderingRequest";

import {
    CardOrderingResponse,
} from "../models/CardOrderingResponse";

export function orderingMatchesCurrentState(

    request: CardOrderingRequest,

    response: CardOrderingResponse,

): boolean {

    if (

        request.options.cards.length !==

        response.cards.length

    ) {

        return false;

    }

    const expected =

        new Set(

            request.options.cards.map(

                card => card.id,

            ),

        );

    for (

        const card of response.cards

    ) {

        if (

            !expected.has(card.id)

        ) {

            return false;

        }

    }

    return true;

}