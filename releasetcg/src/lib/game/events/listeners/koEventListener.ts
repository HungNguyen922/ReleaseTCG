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
    PlayerDamagedEvent,
} from "@/lib/game/events/state";

import {
    emitEvent,
} from "@/lib/game/events/emitEvent";

import {
    createGameEndedEvent,
} from "@/lib/game/events/gameplay";

export const koEventListener: EventListener<PlayerDamagedEvent> = {

    accepts(
        event: EngineEvent,
    ): event is PlayerDamagedEvent {

        return (
            event.type === EventType.PlayerDamaged
        );

    },

    execute(
        context,
        event,
    ) {

        if (context.state.winnerId) {

            //
            // Game already over.
            //

            return;

        }

        const damagedPlayer =
            context.state.players.find(
                player => player.id === event.player.id,
            );

        if (!damagedPlayer) {
            return;
        }

        if (damagedPlayer.health > 0) {
            return;
        }

        const winner =
            context.state.players.find(
                player => player.id !== damagedPlayer.id,
            );

        context.state.winnerId =
            winner?.id ?? null;

        emitEvent(
            context,
            createGameEndedEvent(
                winner?.id ?? null,
                "knockout",
            ),
        );

    },

};