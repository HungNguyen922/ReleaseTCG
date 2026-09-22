import {
    GateReference,
} from "@/lib/game/refs";

import { EventType } from "../EventType";
import { StateEvent } from "./StateEvent";

export interface GateDestroyedEvent
    extends StateEvent {

    type: EventType.GateDestroyed;

    gate: GateReference;

}

export function createGateDestroyedEvent(
    gate: GateReference,
): GateDestroyedEvent {

    return {

        type: EventType.GateDestroyed,

        gate,

    };

}