import {
    CardReference,
    PlayerReference,
} from "@/lib/game/refs";

import { EventType } from "../EventType";
import { StateEvent } from "./StateEvent";

export interface CardsDrawnEvent
    extends StateEvent {

    type: EventType.CardsDrawn;

    player: PlayerReference;

    cards: CardReference[];

}

export function createCardsDrawnEvent(
    player: PlayerReference,
    cards: CardReference[],
): CardsDrawnEvent {

    return {

        type: EventType.CardsDrawn,

        player,

        cards,

    };

}