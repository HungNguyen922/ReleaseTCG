import { EngineContext } from "./EngineContext";
import { CardDefinition, GameState } from "./models";

export function createEngineContext(
    state: GameState,
    cardDatabase: Record<string, CardDefinition>,
): EngineContext {

    return {
        state,
        cardDatabase,
        commandQueue: [],
        eventQueue: [],
        pendingResolutions: [],
        pendingInteractions: [],
    };

}