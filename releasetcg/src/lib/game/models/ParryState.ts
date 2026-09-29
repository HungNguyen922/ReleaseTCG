import type { GateReference } from "../refs";

export interface ParryEntry {
    playerId: string;
    cardId: string;
}

export interface ParryState {

    /** Player who made the pending Play. */
    attackerId: string;

    /** The player who gets the first chance to parry. */
    defenderId: string;

    /**
     * Gate(s) the pending Play landed on.
     * gates[0] is the "primary" gate — the one parries stack onto.
     */
    gates: GateReference[];

    /** Cards that made up the pending Play. */
    playCardIds: string[];

    /**
     * Parries in the order they were played.
     * chain[0] is always the defender's parry, chain[1] the attacker's, etc.
     */
    chain: ParryEntry[];

    /** Whose turn it is to parry (or decline). */
    responderId: string;

    /** Every parry in the chain must have exactly this Bulk. */
    requiredBulk: number;

}