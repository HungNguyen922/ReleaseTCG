import {
    CardReference,
    PlayerReference,
} from "@/lib/game/refs";

import { EventType } from "../EventType";
import { StateEvent } from "./StateEvent";

export interface CardsRevealedEvent
    extends StateEvent {

    type: EventType.CardsRevealed;

    cards: CardReference[];

    viewers: PlayerReference[];

}

export function createCardsRevealedEvent(
    cards: CardReference[],
    viewers: PlayerReference[],
): CardsRevealedEvent {

    return {

        type: EventType.CardsRevealed,

        cards,

        viewers,

    };

}