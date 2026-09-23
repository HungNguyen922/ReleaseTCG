import {
    TurnPhase,
} from "@/lib/game/models";

export interface TurnState {

    /**
     * Whose turn is it?
     */
    currentPlayerId: string;

    /**
     * Starts at 1.
     */
    turnNumber: number;

    /**
     * How many sets have been played this turn. Resets to 0 at the start of each turn.
     */
    setsPlayedThisTurn: number;

    /**
     * Current phase of the turn.
     */
    phase: TurnPhase;

    /**
     * Indicates when to switch from Action to Fill Phase
     */
    actionTaken: boolean;

    /**
     * Indicates how many cards you have played this turn (for Mill)
     */
    cardsPlayedThisTurn: number;

}