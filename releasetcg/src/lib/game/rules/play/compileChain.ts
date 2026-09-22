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
    resolveOpeningUnit,
} from "@/lib/game/queries/chain/resolveOpeningUnit";

import {
    validateChain,
} from "@/lib/game/queries/chain/validateChain";

import {
    createChainAction,
} from "../../actions";

import {
    failure,
    success,
} from "../utils";

import { RuleResult } from "../RuleResult";

export function compileChain(
    context: EngineContext,
    intent: PlayIntent,
): RuleResult {

    //
    // Chain requires exactly one destination.
    //

    if (intent.destinations.length !== 1) {

        return failure(
            "Chain requires exactly one destination.",
        );

    }

    const destination =
        intent.destinations[0];

    //
    // Destination must be a gate.
    //

    if (
        destination.locationType !==
        LocationType.Gate
    ) {

        return failure(
            "Chain must target a gate.",
        );

    }

    const gateReference: GateReference =
        destination;

    //
    // Gate must exist.
    //

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
    // Resolve submitted cards.
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
        // For now Chain only allows cards
        // from the player's hand.
        // (Later this expands to Set Zones.)
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
                "All Chain cards must come from your hand.",
            );

        }

        resolvedCards.push(
            location.card,
        );

    }

    //
    // Resolve the opening pure/pseudopure.
    //

    const opening =
        resolveOpeningUnit(
            context,
            gate,
            resolvedCards,
        );

    if (!opening) {

        return failure(
            "Cards do not form a valid opening unit.",
        );

    }

    //
    // Validate the remainder of the chain.
    //

    if (

        !validateChain(

            context,

            opening.anchor,

            opening.remaining,

        )

    ) {

        return failure(
            "Chain is not continuous.",
        );

    }

    //
    // Compile action.
    //

    return success(

        createChainAction(

            intent.player,

            gateReference,

            opening.opening.map(
                card => ({
                    id: card.id,
                }),
            ),

            opening.remaining.map(
                card => ({
                    id: card.id,
                }),
            ),

        ),

    );

}