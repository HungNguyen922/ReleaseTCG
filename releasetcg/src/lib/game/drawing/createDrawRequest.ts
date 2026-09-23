import {
    DrawRequest,
} from "./models";

import {
    PileReference,
} from "@/lib/game/refs";

export function createDrawRequest(

    amount: number,

    availablePiles: PileReference[],

): DrawRequest {

    return {

        amount,

        availablePiles,

    };

}