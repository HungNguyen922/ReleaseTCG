import { EngineContext } from "@/lib/game/EngineContext";

import {
    CardInstance,
    GateZone,
} from "@/lib/game/models";

import {
    isPure,
    isPseudoPure,
} from "../purity";

export interface OpeningUnit {

    /**
     * Cards that satisfy the opening requirement.
     */
    opening: CardInstance[];

    /**
     * Remaining cards after removing the opening.
     */
    remaining: CardInstance[];

    /**
     * Last card of a pseudopure.
     *
     * Undefined when the opening
     * is a single pure.
     */
    anchor?: CardInstance;

}

export function resolveOpeningUnit(
    context: EngineContext,
    gate: GateZone,
    submitted: CardInstance[],
): OpeningUnit | null {

    //
    // Existing pseudopure.
    //

    if (
        gate.stack &&
        gate.stack.cards.length >= 2
    ) {

        const first = gate.stack.cards[0];
        const second = gate.stack.cards[1];

        if (
            isPseudoPure(
                context,
                first,
                second,
            )
        ) {

            return {

                opening: [
                    first,
                    second,
                ],

                remaining: submitted,

                anchor: second,

            };

        }

    }

    //
    // Existing pure.
    //

    if (
        gate.stack &&
        gate.stack.cards.length > 0
    ) {

        const top = gate.stack.cards[0];

        if (
            isPure(
                context,
                top,
            )
        ) {

            return {

                opening: [
                    top,
                ],

                remaining: submitted,

            };

        }

    }

    //
    // Pure from hand.
    //

    for (let i = 0; i < submitted.length; i++) {

        if (
            isPure(
                context,
                submitted[i],
            )
        ) {

            return {

                opening: [
                    submitted[i],
                ],

                remaining:

                    submitted.filter(
                        (_, index) =>
                            index !== i,
                    ),

            };

        }

    }

    //
    // Pseudopure from hand.
    //

    for (let i = 0; i < submitted.length; i++) {

        for (
            let j = i + 1;
            j < submitted.length;
            j++
        ) {

            if (
                isPseudoPure(
                    context,
                    submitted[i],
                    submitted[j],
                )
            ) {

                return {

                    opening: [
                        submitted[i],
                        submitted[j],
                    ],

                    remaining:

                        submitted.filter(
                            (_, index) =>
                                index !== i &&
                                index !== j,
                        ),

                    anchor:
                        submitted[j],

                };

            }

        }

    }

    //
    // Mixed pseudopure.
    //

    if (
        gate.stack &&
        gate.stack.cards.length > 0
    ) {

        const gateCard =
            gate.stack.cards[0];

        for (let i = 0; i < submitted.length; i++) {

            if (

                isPseudoPure(

                    context,

                    gateCard,

                    submitted[i],

                )

            ) {

                return {

                    opening: [

                        gateCard,

                        submitted[i],

                    ],

                    remaining:

                        submitted.filter(
                            (_, index) =>
                                index !== i,
                        ),

                    anchor:
                        submitted[i],

                };

            }

        }

    }

    return null;

}