import {
    GateReference,
} from "@/lib/game/refs";

import { EventType } from "../EventType";
import { StateEvent } from "./StateEvent";

export interface GateCreatedEvent
    extends StateEvent {

    type: EventType.GateCreated;

    gate: GateReference;

}

export function createGateCreatedEvent(
    gate: GateReference,
): GateCreatedEvent {

    return {

        type: EventType.GateCreated,

        gate,

    };

}