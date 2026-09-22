import { EngineContext } from "@/lib/game/EngineContext";

import {
    CardInstance,
    GateZone,
} from "@/lib/game/models";

import {
    isPseudoPure,
} from "@/lib/game/queries/purity";

export interface BoundResolution {

    firstHalf: CardInstance;

    middle: CardInstance[];

    secondHalf: CardInstance;

}

export function resolveBound(
    context: EngineContext,
    gate: GateZone,
    submitted: CardInstance[],
): BoundResolution | null {

    //
    // Case 1
    // Gate provides first half.
    //

    if (

        gate.stack &&
        gate.stack.cards.length > 0

    ) {

        const gateCard =
            gate.stack.cards[0];

        for (

            let i = 0;

            i < submitted.length;

            i++

        ) {

            if (

                isPseudoPure(

                    context,

                    gateCard,

                    submitted[i],

                )

            ) {

                return {

                    firstHalf:
                        gateCard,

                    middle:
                        submitted.slice(
                            0,
                            i,
                        ),

                    secondHalf:
                        submitted[i],

                };

            }

        }

    }

    //
    // Case 2
    // Entire Bound comes from hand.
    //

    for (

        let first = 0;

        first < submitted.length;

        first++

    ) {

        for (

            let second = first + 1;

            second < submitted.length;

            second++

        ) {

            if (

                isPseudoPure(

                    context,

                    submitted[first],

                    submitted[second],

                )

            ) {

                return {

                    firstHalf:
                        submitted[first],

                    middle:
                        submitted.slice(
                            first + 1,
                            second,
                        ),

                    secondHalf:
                        submitted[second],

                };

            }

        }

    }

    return null;

}