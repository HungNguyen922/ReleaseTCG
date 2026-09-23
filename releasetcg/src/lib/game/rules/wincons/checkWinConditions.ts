import {
    EngineContext,
} from "@/lib/game/EngineContext";

import {
    checkKnockout,
} from "./checkKnockout";

import {
    checkDeckout,
} from "./checkDeckout";

import {
    checkHoldout,
} from "./checkHoldout";

export function checkWinConditions(

    context: EngineContext,

): void {

    const winner =

        checkKnockout(

            context,

        )

        ??

        checkDeckout(

            context,

        )

        ??

        checkHoldout(

            context,

        );

    if (

        winner === null

    ) {

        return;

    }

    context.state.winnerId =

        winner;

}