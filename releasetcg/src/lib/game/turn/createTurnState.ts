import {
    TurnState,
} from "@/lib/game/models";

import {
    TurnPhase,
} from "@/lib/game/models/TurnPhase";

export function createTurnState(

    firstPlayerId: string,

): TurnState {

    return {

        currentPlayerId: firstPlayerId,

        turnNumber: 1,

        phase: TurnPhase.Instant,

        actionTaken: false,

    };

}