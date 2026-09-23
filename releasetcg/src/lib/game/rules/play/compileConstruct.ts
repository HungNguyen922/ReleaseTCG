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

import { findPureUnits } from "@/lib/game/queries/purity/findPureUnits";

import {
    createConstructAction,
} from "../../actions";

import {
    failure,
    success,
} from "../utils";

import { RuleResult } from "../RuleResult";

export function compileConstruct(
    context: EngineContext,
    intent: PlayIntent,
): RuleResult {

    //
    // Construct requires one destination.
    //

    if (intent.destinations.length !== 1) {
        return failure(
            "Construct requires exactly one destination.",
        );
    }


    const destination =
        intent.destinations[0];


    //
    // Destination must be a gate.
    //

    if (
        destination.locationType !== LocationType.Gate
    ) {
        return failure(
            "Construct must target a gate.",
        );
    }


    //
    // Narrow LocationReference -> GateReference
    //

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
    // Gate must be empty.
    //

    if (gate.stack) {
        return failure(
            "Construct requires an empty gate.",
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


        if (
            location.location.locationType !== LocationType.Pile ||
            location.location.pileType !== PileType.Hand ||
            location.location.playerId !== intent.player.id
        ) {
            return failure(
                "All Construct cards must come from your hand.",
            );
        }


        resolvedCards.push(
            location.card,
        );

    }


    //
    // Validate the submitted cards form
    // exactly two pure units.
    //

    const pureUnits =
        findPureUnits(
            context,
            resolvedCards,
        );


    if (!pureUnits) {
        return failure(
            "Cards do not form two valid pures.",
        );
    }


    return success(

        createConstructAction(
            intent.player,
            intent.cards,
            gateReference,
        ),

    );

}