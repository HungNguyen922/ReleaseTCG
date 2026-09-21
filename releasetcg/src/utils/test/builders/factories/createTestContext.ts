import { createEngineContext } from "../../../../lib/game/createEngineContext";
import { CardDefinition, GameState } from "../../../../lib/game/models";

export function createTestContext(
    state: GameState,
    cardDatabase: Record<string, CardDefinition> = {},
) {
    return createEngineContext(
        state,
        cardDatabase,
    );
}