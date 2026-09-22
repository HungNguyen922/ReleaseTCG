import { EngineContext } from "../EngineContext";

export function incrementSetsPlayedThisTurn(
    context: EngineContext,
    count: number = 1,
): void {

    context.state.turn.setsPlayedThisTurn += count;

}