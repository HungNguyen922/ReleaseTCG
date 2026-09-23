import { PriorityState } from "../models";

export function createPriorityState(
    firstPlayerId: string
): PriorityState {
    return {
        currentPlayerId: firstPlayerId,
    };
}