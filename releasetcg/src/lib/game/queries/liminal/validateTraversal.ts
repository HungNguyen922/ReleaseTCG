import { EngineContext } from "@/lib/game/EngineContext";

import {
    CardInstance,
    GateZone,
} from "@/lib/game/models";

import {
    validateBridge,
} from "./validateBridge";

export function validateTraversal(
    context: EngineContext,
    bridge: CardInstance,
    from: GateZone,
    to: GateZone,
): boolean {

    //
    // Both gates must exist and contain stacks.
    //

    if (
        !from.stack ||
        !to.stack
    ) {

        return false;

    }

    //
    // The bridge determines whether the next
    // gate can be entered.
    //

    return validateBridge(
        context,
        bridge,
        to,
    );

}