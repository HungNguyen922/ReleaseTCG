import { EngineContext } from "@/lib/game/EngineContext";

import {
    CardInstance,
    GateZone,
} from "@/lib/game/models";

import {
    cardsShareColorSet,
} from "@/lib/game/queries";

export function validateBridge(
    context: EngineContext,
    bridge: CardInstance,
    gate: GateZone,
): boolean {

    if (
        !gate.stack ||
        gate.stack.cards.length === 0
    ) {

        return false;

    }

    const topCard =
        gate.stack.cards[0];

    return cardsShareColorSet(
        context,
        bridge,
        topCard,
        1,
    );

}