import { EngineContext } from "../EngineContext";

export function incrementCardsPlayedThisTurn(
    context: EngineContext,
    count: number = 1,
): void {

    context.state.turn.cardsPlayedThisTurn += count;

}