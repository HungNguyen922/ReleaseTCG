import { EngineContext } from "../../EngineContext";

import { PlayIntent } from "../../intents";

import {
    LocationType,
    PileType,
} from "../../models";

import {
    GateReference,
} from "../../refs";

import {
    findCard,
    findGate,
} from "../../queries";

import {
    resolveBound,
} from "@/lib/game/queries/bound/resolveBound";

import {
    validateBound,
} from "@/lib/game/queries/bound/validateBound";

import {
    createBoundAction,
} from "../../actions";

import {
    failure,
    success,
} from "../utils";

import { RuleResult } from "../RuleResult";

export function compileBound(
    context: EngineContext,
    intent: PlayIntent,
): RuleResult {

    //
    // One destination.
    //

    if (intent.destinations.length !== 1) {

        return failure(
            "Bound requires exactly one destination.",
        );

    }

    const destination =
        intent.destinations[0];

    if (
        destination.locationType !==
        LocationType.Gate
    ) {

        return failure(
            "Bound must target a gate.",
        );

    }

    const gateReference: GateReference =
        destination;

    const gate =
        findGate(
            context,
            gateReference,
        );

    if (!gate) {

        return failure(
            "Target gate does not exist.",
        );

    }

    //
    // Resolve cards.
    //

    const resolvedCards = [];

    for (const reference of intent.cards) {

        const location =
            findCard(
                context,
                reference,
            );

        if (!location) {

            return failure(
                "Card not found.",
            );

        }

        //
        // TODO:
        // Expand to Set Zones later.
        //

        if (

            location.location.locationType !==
                LocationType.Pile ||

            location.location.pileType !==
                PileType.Hand ||

            location.location.playerId !==
                intent.player.id

        ) {

            return failure(
                "All Bound cards must come from your hand.",
            );

        }

        resolvedCards.push(
            location.card,
        );

    }

    //
    // Resolve Bound structure.
    //

    const bound =
        resolveBound(
            context,
            gate,
            resolvedCards,
        );

    if (!bound) {

        return failure(
            "Cards do not form a valid Bound.",
        );

    }

    //
    // Validate corridor.
    //

    if (

        !validateBound(

            context,

            bound,

        )

    ) {

        return failure(
            "Bound is not continuous.",
        );

    }

    return success(

        createBoundAction(

            intent.player,

            gateReference,

            {
                id:
                    bound.firstHalf.id,
            },

            bound.middle.map(
                card => ({
                    id: card.id,
                }),
            ),

            {
                id:
                    bound.secondHalf.id,
            },

        ),

    );

}