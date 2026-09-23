import {
    EventListener,
} from "./EventListener";

import {
    EngineContext,
} from "@/lib/game/EngineContext";

import {
    EngineEvent,
    EventType,
} from "@/lib/game/events";

import {
    PhaseStartedEvent,
} from "@/lib/game/events/gameplay";

import {
    createDrawCardsCommand,
} from "@/lib/game/commands";

import {
    createEnforceMaxHandCommand,
} from "@/lib/game/commands";

import {
    createEndTurnCommand,
} from "@/lib/game/commands";

import {
    LocationType,
    PileType,
    TurnPhase,
} from "@/lib/game/models";

export const fillPhaseEventListener: EventListener<PhaseStartedEvent> = {

    accepts(
        event: EngineEvent,
    ): event is PhaseStartedEvent {

        return (
            event.type === EventType.PhaseStarted &&
            event.phase === TurnPhase.Fill
        );

    },

    execute(
        context,
        event,
    ) {

        const playerId =
            context.state.turn.currentPlayerId;

        const player = { id: playerId };

        const hand =
            context.state.piles.find(
                pile =>
                    pile.pileType === PileType.Hand &&
                    pile.ownerId === playerId,
            );

        const currentHandSize =
            hand?.cards.length ?? 0;

        //
        // Fill: draw up to 4, minus Sets played
        // this turn.
        //

        const targetHandSize =
            Math.max(
                0,
                4 - context.state.turn.setsPlayedThisTurn,
            );

        const fillCount =
            Math.max(
                0,
                targetHandSize - currentHandSize,
            );

        if (fillCount > 0) {

            context.commandQueue.push(

                createDrawCardsCommand(

                    player,

                    fillCount,

                    {
                        locationType: LocationType.Pile,
                        pileType: PileType.MainDeck,
                        playerId,
                    },

                ),

            );

        }

        //
        // Mill: if 3+ cards played this turn,
        // draw 1 additional from the Public Pile.
        //

        if (context.state.turn.cardsPlayedThisTurn >= 3) {

            context.commandQueue.push(

                createDrawCardsCommand(

                    player,

                    1,

                    {
                        locationType: LocationType.Pile,
                        pileType: PileType.PublicPile,
                    },

                ),

            );

        }

        //
        // Max: discard down to 8.
        //

        context.commandQueue.push(

            createEnforceMaxHandCommand(
                player,
            ),

        );

        //
        // End the turn.
        //

        context.commandQueue.push(

            createEndTurnCommand(
                player,
            ),

        );

    },

};