import { EngineContext } from "../../EngineContext";

import {
    createBeginAttackCommand,
} from "../../commands";

import {
    GateReference,
} from "../../refs";

export function queueAttacks(
    context: EngineContext,
    gates: GateReference[],
): void {

    for (const gate of gates) {

        context.commandQueue.push(
            createBeginAttackCommand({ gate }),
        );

    }

}