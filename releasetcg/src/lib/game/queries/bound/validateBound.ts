import { EngineContext } from "@/lib/game/EngineContext";

import {
    CardColor,
} from "@/lib/game/models";

import {
    BoundResolution,
} from "./resolveBound";

export function validateBound(
    context: EngineContext,
    bound: BoundResolution,
): boolean {

    const firstDefinition =
        context.cardDatabase[
            bound.firstHalf.cardId
        ];

    const secondDefinition =
        context.cardDatabase[
            bound.secondHalf.cardId
        ];

    if (

        !firstDefinition ||

        !secondDefinition

    ) {

        return false;

    }

    //
    // Colors shared by the pseudopure.
    //

    const sharedColors =
        firstDefinition.colors.filter(

            color =>

                secondDefinition.colors.includes(
                    color,
                ),

        );

    //
    // Any shared color may act as
    // the corridor.
    //

    for (

        const color of sharedColors

    ) {

        let valid = true;

        for (

            const card of bound.middle

        ) {

            const definition =
                context.cardDatabase[
                    card.cardId
                ];

            if (

                !definition ||

                !definition.colors.includes(
                    color,
                )

            ) {

                valid = false;

                break;

            }

        }

        if (valid) {

            return true;

        }

    }

    return false;

}