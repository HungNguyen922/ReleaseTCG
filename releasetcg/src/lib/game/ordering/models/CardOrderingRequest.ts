import {
    CardOrderingOptions,
} from "./CardOrderingOptions";

export interface CardOrderingRequest {

    /**
     * Display title.
     */
    title: string;

    /**
     * Prompt shown to the player.
     */
    message: string;

    /**
     * Ordering rules.
     */
    options: CardOrderingOptions;

}