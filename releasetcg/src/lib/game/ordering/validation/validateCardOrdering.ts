import {
    CardOrderingRequest,
} from "../models/CardOrderingRequest";

import {
    CardOrderingResponse,
} from "../models/CardOrderingResponse";

export function validateCardOrdering(

    request: CardOrderingRequest,

    response: CardOrderingResponse,

): void {

    const expected = request.options.cards;
    const received = response.cards;

    //
    // Validate count.
    //

    if (

        received.length < request.options.minimumCards

    ) {

        throw new Error(

            "Too few cards were returned.",

        );

    }

    if (

        received.length > request.options.maximumCards

    ) {

        throw new Error(

            "Too many cards were returned.",

        );

    }

    //
    // Ensure every returned card exists.
    //

    for (const card of received) {

        if (

            !expected.some(

                candidate =>

                    candidate.id === card.id,

            )

        ) {

            throw new Error(

                `Unknown card "${card.id}" in ordering response.`,

            );

        }

    }

    //
    // Unless explicitly allowed,
    // every card must be returned.
    //

    if (

        !request.options.allowRemovingCards &&

        received.length !== expected.length

    ) {

        throw new Error(

            "Cards may not be removed from this ordering.",

        );

    }

    //
    // No duplicates.
    //

    const ids = new Set<string>();

    for (const card of received) {

        if (

            ids.has(card.id)

        ) {

            throw new Error(

                `Duplicate card "${card.id}" detected.`,

            );

        }

        ids.add(card.id);

    }

}