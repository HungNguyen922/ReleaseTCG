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
    validateSplit,
} from "@/lib/game/queries/split/validateSplit";

import {
    createSplitAction,
} from "../../actions";

import {
    failure,
    success,
} from "../utils";

import { RuleResult } from "../RuleResult";


export function compileSplit(
    context: EngineContext,
    intent: PlayIntent,
): RuleResult {


    //
    // Split requires at least two cards.
    //

    if (intent.cards.length < 2) {

        return failure(
            "Split requires at least two cards.",
        );

    }


    //
    // Split requires one destination per card.
    //

    if (
        intent.cards.length !==
        intent.destinations.length
    ) {

        return failure(
            "Split requires one gate per card.",
        );

    }


    //
    // Resolve gates.
    //

    const gates: GateReference[] = [];

    for (const destination of intent.destinations) {

        if (
            destination.locationType !==
            LocationType.Gate
        ) {

            return failure(
                "Split destinations must be gates.",
            );

        }

        const gateReference =
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

        gates.push(
            gateReference,
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
        // Add Set Zones later.
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
                "All Split cards must come from your hand.",
            );

        }


        resolvedCards.push(
            location.card,
        );

    }


    //
    // Validate all cards are the same pure unit.
    //

    if (

        !validateSplit(

            context,

            resolvedCards,

        )

    ) {

        return failure(
            "Cards do not form identical split units.",
        );

    }


    return success(

        createSplitAction(

            intent.player,

            intent.cards,

            gates,

        ),

    );

}