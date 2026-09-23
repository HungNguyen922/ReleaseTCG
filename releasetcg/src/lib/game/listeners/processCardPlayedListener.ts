import {
    AbilityContext,
} from "@/lib/game/abilities";

import {
    CardMovedEvent,
} from "@/lib/game/events/state";

import {
    EventType,
} from "@/lib/game/events";

import {
    enqueuePendingResolution,
} from "@/lib/game/resolution";

import {
    LocationType,
    PileType,
} from "@/lib/game/models";

export function processCardPlayedListener(
    context: AbilityContext,
): void {

    const event =
        context.event as CardMovedEvent;

    if (

        event.type !==
            EventType.CardMoved

    ) {

        return;

    }

    if (

        event.from.locationType !==
            LocationType.Pile ||

        event.from.pileType !==
            PileType.Hand

    ) {

        return;

    }

    if (

        event.to.locationType !==
            LocationType.Gate

    ) {

        return;

    }

    enqueuePendingResolution(

        context.game,

        event.card,

    );

}