import {
    CardReference,
    LocationReference,
} from "@/lib/game/refs";

import { EventType } from "../EventType";
import { StateEvent } from "./StateEvent";

export interface CardMovedEvent
    extends StateEvent {

    type: EventType.CardMoved;

    card: CardReference;

    from: LocationReference;

    to: LocationReference;

}

export function createCardMovedEvent(
    card: CardReference,
    from: LocationReference,
    to: LocationReference,
): CardMovedEvent {

    return {

        type: EventType.CardMoved,

        card,

        from,

        to,

    };

}