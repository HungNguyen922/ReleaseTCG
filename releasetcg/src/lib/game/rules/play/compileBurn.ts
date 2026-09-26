import { EngineContext } from "../../EngineContext";

import { PlayIntent } from "../../intents";

import { PileType, LocationType } from "../../models";

import {
    findCard,
    findGate,
    findTopGateCard,
    cardsShareColorSet,
} from "../../queries";

import { createBurnAction } from "../../actions";

import { isValidPlaySource } from "./isValidPlaySource";

import {
    failure,
    success,
} from "../utils";

import { RuleResult } from "../RuleResult";

export function compileBurn(
    context: EngineContext,
    intent: PlayIntent,
): RuleResult {

    //
    // Burn requires exactly one card.
    //

    if (intent.cards.length !== 1) {
        return failure(
            "Burn requires exactly one card.",
        );
    }

    //
    // Burn requires exactly one destination.
    //

    if (intent.destinations.length !== 1) {
        return failure(
            "Burn requires exactly one destination.",
        );
    }

    const card = findCard(
        context,
        intent.cards[0],
    );

    if (!card) {
        return failure(
            "Card not found.",
        );
    }

    //
    // card must come from player's hand
    // or an occupied set zone
    //

    if (!isValidPlaySource(context, card.location, intent.player.id)) {
        return failure(
            "Card must be played from your hand or an occupied Set Zone.",
        );
    }

    const destination = intent.destinations[0];

    if (destination.locationType !== LocationType.Gate) {
        return failure(
            "Burn must target a gate.",
        );
    }
    
    const gate = findGate(
        context,
        destination,
    );

    if (!gate) {
        return failure(
            "Target gate does not exist.",
        );
    }

    const topCard = findTopGateCard(
        context,
        destination,
    );

    if (!topCard) {
        return failure(
            "Burn requires an existing gate.",
        );
    }

    if (
        !cardsShareColorSet(
            context,
            card.card,
            topCard,
            1,
        )
    ) {
        return failure(
            "Played card must share at least one color with the gate.",
        );
    }

    return success(
        createBurnAction(
            intent.player,
            intent.cards,
            destination,
        ),
    );
}