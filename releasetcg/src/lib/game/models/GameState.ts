import { BoardState } from "./BoardState";
import { PileState } from "./PileState";
import { PlayerState } from "./PlayerState";
import { PriorityState } from "./PriorityState";
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
     * Winner of the game.
     */
    winnerId: string | null;
}