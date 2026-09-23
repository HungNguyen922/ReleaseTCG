import { EngineContext } from "@/lib/game/EngineContext";

import { CardInstance } from "@/lib/game/models";

import { GateReference } from "@/lib/game/refs";

import { findGate } from "./findGate";

export function findTopGateCard(
    context: EngineContext,
    reference: GateReference,
): CardInstance | null {

    const gate =

        findGate(
            context,
            reference,
        );

    if (

        !gate ||

        !gate.stack ||

        gate.stack.cards.length === 0

    ) {

        return null;

    }

    return gate.stack.cards[0];

}