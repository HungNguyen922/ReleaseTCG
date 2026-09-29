import { EngineContext } from "@/lib/game/EngineContext";

import {
    createDeclineParryAction,
    createParryAction,
} from "@/lib/game/actions";

import { LocationType, PileType } from "@/lib/game/models";

import { findCard } from "@/lib/game/queries";
import { findCardDefinition } from "@/lib/game/queries/lookup";

import { CardReference, PlayerReference } from "@/lib/game/refs";

import { RuleResult } from "../RuleResult";
import { failure, success } from "../utils";

function checkResponder(
    context: EngineContext,
    player: PlayerReference,
): string | null {

    const parry = context.state.parry;

    if (!parry) {
        return "There is no play to parry.";
    }

    if (parry.responderId !== player.id) {
        return "It's not your turn to parry.";
    }

    return null;

}

export function compileParry(
    context: EngineContext,
    intent: { player: PlayerReference; card: CardReference },
): RuleResult {

    const error = checkResponder(context, intent.player);

    if (error) {
        return failure(error);
    }

    const parry = context.state.parry!;

    const found = findCard(context, intent.card);

    if (!found) {
        return failure("Card not found.");
    }

    //
    // Parries come from the hand only. Set Zone cards can't parry.
    //

    const location = found.location;

    if (
        location.locationType !== LocationType.Pile ||
        location.pileType !== PileType.Hand ||
        location.playerId !== intent.player.id
    ) {
        return failure("Parries must be played from your hand.");
    }

    const bulk = findCardDefinition(context, found.card).bulk;

    if (bulk !== parry.requiredBulk) {
        return failure(
            `A parry must have Bulk ${parry.requiredBulk}.`,
        );
    }

    return success(
        createParryAction(intent.player, intent.card),
    );

}

export function compileDeclineParry(
    context: EngineContext,
    player: PlayerReference,
): RuleResult {

    const error = checkResponder(context, player);

    if (error) {
        return failure(error);
    }

    return success(
        createDeclineParryAction(player),
    );

}