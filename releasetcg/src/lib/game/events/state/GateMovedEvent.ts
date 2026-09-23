import {
    GateReference,
} from "@/lib/game/refs";

import {
    EventType,
} from "../EventType";

import {
    StateEvent,
} from "./StateEvent";

export interface GateMovedEvent
    extends StateEvent {

    type: EventType.GateMoved;

    from: GateReference;

    to: GateReference;

}

export function createGateMovedEvent(
    from: GateReference,
    to: GateReference,
): GateMovedEvent {

    return {

        type: EventType.GateMoved,

        from,

        to,

    };

}