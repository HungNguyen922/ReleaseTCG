import { BoardState } from "./BoardState";
import { PileState } from "./PileState";
import { PlayerState } from "./PlayerState";
import { PriorityState } from "./PriorityState";
import { ParryState } from "./ParryState";
import { TurnState } from "./TurnState";

export interface GameState {
    /**
     * Unique game identifier.
     */
    id: string;

    /**
     * Runtime player state.
     */
    players: PlayerState[];

    /**
     * Shared battlefield.
     */
    board: BoardState;

    /**
     * Every pile that exists in the game.
     *
     * This includes:
     * - Player hands
     * - Player main decks
     * - Player extra decks
     * - Public pile
     * - Gap
     * - Temporary effect-created piles (ex. Rend)
     */
    piles: PileState[];

    /**
     * Current turn information.
     */
    turn: TurnState;

    /**
     * Current priority chain.
     */
    priority: PriorityState;

    /**
     * Open parry window, if a Play is currently being responded to.
     */
    parry: ParryState | null;

    /**
     * Winner of the game.
     */
    winnerId: string | null;
}