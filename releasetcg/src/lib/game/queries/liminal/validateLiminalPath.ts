import {
    GateReference,
} from "@/lib/game/refs";

import {
    areAdjacent,
} from "./areAdjacent";

export function validateLiminalPath(
    path: GateReference[],
): boolean {

    //
    // Liminal requires at least one gate.
    //

    if (
        path.length === 0
    ) {

        return false;

    }

    //
    // Every hop in the path must connect
    // adjacent gates.
    //

    for (

        let i = 0;

        i < path.length - 1;

        i++

    ) {

        if (

            !areAdjacent(

                path[i],

                path[i + 1],

            )

        ) {

            return false;

        }

    }

    return true;

}