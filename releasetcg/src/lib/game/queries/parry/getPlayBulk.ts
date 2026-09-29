import { EngineContext } from "@/lib/game/EngineContext";

import { GateReference } from "@/lib/game/refs";

import {
    findTopGateCard,
    findCardDefinition,
} from "../lookup";

export function getPlayBulk(
    context: EngineContext,
    gates: GateReference[],
): number | null {

    if (gates.length === 0) {

        return null;

    }

    const top =
        findTopGateCard(
            context,
            gates[0],
        );

    if (!top) {

        return null;

    }

    return findCardDefinition(
        context,
        top,
    ).bulk;

}