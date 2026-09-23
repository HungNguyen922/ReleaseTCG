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
    // Card must come from the player's hand.
    //

    if (
        card.location.locationType !== LocationType.Pile ||
        card.location.pileType !== PileType.Hand ||
        card.location.playerId !== intent.player.id
    ) {
        return failure(
            "Card must be played from your hand.",
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