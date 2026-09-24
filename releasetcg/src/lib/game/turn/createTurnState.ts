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

        setsPlayedThisTurn: 0,

        phase: TurnPhase.Instant,

        actionTaken: false,

        cardsPlayedThisTurn: 0,

    };

}