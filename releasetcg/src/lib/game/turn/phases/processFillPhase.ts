import {
    EngineContext,
} from "@/lib/game/EngineContext";

import {
    TurnPhase,
} from "@/lib/game/models";

import {
    createHandReference,
} from "@/lib/game/refs";

import {
    findPile,
} from "@/lib/game/queries";

import {
    findAvailableDrawPiles,
} from "@/lib/game/drawing";

import {
    createPileTargetRequest,
} from "@/lib/game/targeting/requests";

import {
    processTargetRequest,
} from "@/lib/game/targeting";

import {
    queueDrawCommands,
} from "@/lib/game/drawing/reducers/queueDrawCommands";

export function processFillPhase(
    context: EngineContext,
): void {

    const playerId =
        context.state.turn.currentPlayerId;

    const hand = findPile(
        context,
        createHandReference(
            playerId,
        ),
    );

    if (!hand) {

        throw new Error(
            "Current player's hand could not be found.",
        );

    }

    //
    // Alpha:
    // Draw until hand size is four.
    //

    const cardsNeeded = Math.max(
        0,
        4 - hand.cards.length,
    );

    if (cardsNeeded === 0) {

        context.state.turn.phase =
            TurnPhase.End;

        return;

    }

    const availablePiles =
        findAvailableDrawPiles(
            context,
        );

    if (availablePiles.length === 0) {

        //
        // Nothing to draw from.
        // Deckout will eventually
        // handle this.
        //

        context.state.turn.phase =
            TurnPhase.End;

        return;

    }

    const request =
        createPileTargetRequest(

            context,

        );

    processTargetRequest(

        context,

        request,

        target => {

            queueDrawCommands(

                context,

                playerId,

                target.reference,

                cardsNeeded,

            );

        },

    );

    //
    // If multiple piles exist,
    // processTargetRequest()
    // will create a pending
    // interaction and the phase
    // won't advance until it
    // resolves.
    //
    // If only one pile exists,
    // the callback executes
    // immediately.
    //

    if (

        context.pendingInteractions.length === 0

    ) {

        context.state.turn.phase =
            TurnPhase.End;

    }

}