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
} from "../../queries";

import {
    validateLiminal,
} from "@/lib/game/queries/liminal/validateLiminal";

import {
    createLiminalAction,
} from "../../actions";

import { isValidPlaySource } from "./isValidPlaySource";

import {
    failure,
    success,
} from "../utils";

import { RuleResult } from "../RuleResult";

export function compileLiminal(
    context: EngineContext,
    intent: PlayIntent,
): RuleResult {

    //
    // Liminal requires exactly one bridge card.
    //

    if (intent.cards.length !== 1) {

        return failure(
            "Liminal requires exactly one bridge card.",
        );

    }

    //
    // Liminal requires a traversal path.
    //

    if (intent.destinations.length < 1) {

        return failure(
            "Liminal requires at least one gate.",
        );

    }

    //
    // Resolve bridge card.
    //

    const bridge =
        findCard(
            context,
            intent.cards[0],
        );

    if (!bridge) {

        return failure(
            "Bridge card not found.",
        );

    }

    //
    // Bridge card must come from the player's hand
    // or an occupied Set Zone.
    //

    if (!isValidPlaySource(context, bridge.location, intent.player.id)) {
        return failure(
            "Bridge must come from your hand or an occupied Set Zone.",
        );
    }

    //
    // Every destination must be a gate.
    //

    const path: GateReference[] = [];

    for (const destination of intent.destinations) {

        if (

            destination.locationType !==
                LocationType.Gate

        ) {

            return failure(
                "Liminal destinations must all be gates.",
            );

        }

        path.push(destination);

    }

    //
    // Validate traversal.
    //

    if (

        !validateLiminal(

            context,

            bridge.card,

            path,

        )

    ) {

        return failure(
            "Invalid liminal path.",
        );

    }

    //
    // Compile action.
    //

    return success(

        createLiminalAction(

            intent.player,

            intent.cards[0],

            path,

        ),

    );

}