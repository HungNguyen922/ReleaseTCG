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

import { isValidPlaySource } from "./isValidPlaySource";

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


        if (!isValidPlaySource(context, location.location, intent.player.id)) {
            return failure(
                "All Chain cards must come from your hand or an occupied Set Zone.",
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