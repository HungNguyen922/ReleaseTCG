import { EngineContext } from "@/lib/game/EngineContext";

import {
    CardInstance,
} from "@/lib/game/models";

import {
    GateReference,
} from "@/lib/game/refs";

import {
    findGate,
} from "@/lib/game/queries";

import {
    validateBridge,
} from "./validateBridge";

import {
    validateTraversal,
} from "./validateTraversal";

import {
    validateLiminalPath,
} from "./validateLiminalPath";

export function validateLiminal(
    context: EngineContext,
    bridge: CardInstance,
    path: GateReference[],
): boolean {

    //
    // Path itself must be valid.
    //

    if (
        !validateLiminalPath(path)
    ) {

        return false;

    }

    //
    // Resolve first gate.
    //

    const firstGate =
        findGate(
            context,
            path[0],
        );

    if (
        !firstGate
    ) {

        return false;

    }

    //
    // Bridge must be able to enter the first gate.
    //

    if (

        !validateBridge(

            context,

            bridge,

            firstGate,

        )

    ) {

        return false;

    }

    //
    // Validate every hop.
    //

    let previous =
        firstGate;

    for (

        let i = 1;

        i < path.length;

        i++

    ) {

        const next =
            findGate(
                context,
                path[i],
            );

        if (

            !next ||

            !validateTraversal(

                context,

                bridge,

                previous,

                next,

            )

        ) {

            return false;

        }

        previous = next;

    }

    return true;

}