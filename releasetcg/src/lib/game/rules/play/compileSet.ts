import { EngineContext } from "../../EngineContext";

import { PlayIntent } from "../../intents";

import {
    LocationType,
    PileType,
} from "../../models";

import {
    findCard,
    findSetZone,
} from "../../queries";

import {
    createSetAction,
} from "../../actions";

import {
    failure,
    success,
} from "../utils";

import { RuleResult } from "../RuleResult";

export function compileSet(
    context: EngineContext,
    intent: PlayIntent,
): RuleResult {

    //
    // Set requires at least one card.
    //

    if (intent.cards.length === 0) {
        return failure(
            "Set requires at least one card.",
        );
    }

    //
    // Every card must have a destination.
    //

    if (
        intent.cards.length !==
        intent.destinations.length
    ) {
        return failure(
            "Every set card requires a destination.",
        );
    }

    //
    // Validate each card.
    //

    for (const cardReference of intent.cards) {

        const card = findCard(
            context,
            cardReference,
        );

        if (!card) {
            return failure(
                "Card not found.",
            );
        }

        //
        // Normal Set can only set cards
        // from the player's hand.
        //

        if (
            card.location.locationType !==
                LocationType.Pile ||
            card.location.pileType !==
                PileType.Hand ||
            card.location.playerId !==
                intent.player.id
        ) {
            return failure(
                "Set cards must come from your hand.",
            );
        }
    }

    //
    // Validate each destination.
    //

    for (const destination of intent.destinations) {

        if (
            destination.locationType !==
            LocationType.Set
        ) {
            return failure(
                "Set must target a set zone.",
            );
        }

        const setZone = findSetZone(
            context,
            destination,
        );

        if (!setZone) {
            return failure(
                "Target set zone does not exist.",
            );
        }

        //
        // Normal Set can only target
        // empty set zones.
        //

        if (
            setZone.stack &&
            setZone.stack.cards.length > 0
        ) {
            return failure(
                "Target set zone is occupied.",
            );
        }
    }

    //
    // A normal Set cannot target
    // the same zone more than once.
    //

    const destinationKeys =
        intent.destinations.map(
            destination =>
                JSON.stringify(destination),
        );

    if (
        new Set(destinationKeys).size !==
        destinationKeys.length
    ) {
        return failure(
            "A set zone can only be targeted once.",
        );
    }

    //
    // Create one SetAction per card.
    //

    return success(
        createSetAction(
            {
                id: intent.player.id,
            },
            intent.cards,
            intent.destinations,
        ),
    );
}