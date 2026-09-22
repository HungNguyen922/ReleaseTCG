import { EngineContext } from "../EngineContext";

import {
    EnforceMaxHandCommand,
} from "../commands";

import {
    createMoveCardCommand,
} from "../commands";

import {
    findPile,
} from "../queries";

import {
    LocationType,
    PileType,
} from "@/lib/game/models";

export function enforceMaxHandReducer(
    context: EngineContext,
    command: EnforceMaxHandCommand,
): void {

    const hand =
        findPile(
            context,
            {
                locationType: LocationType.Pile,
                pileType: PileType.Hand,
                playerId: command.player.id,
            },
        );

    if (!hand) {

        throw new Error(
            "EnforceMaxHandReducer: hand not found.",
        );

    }

    const excess =
        hand.cards.length - 8;

    if (excess <= 0) {
        return;
    }

    const toDiscard =
        hand.cards.slice(0, excess);

    for (const card of toDiscard) {

        context.commandQueue.push(

            createMoveCardCommand(

                { id: card.id },

                {
                    locationType: LocationType.Pile,
                    pileType: PileType.Gap,
                },

            ),

        );

    }

}