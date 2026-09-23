import { CardDefinition } from "./models";
import { GameCommand } from "./commands";
import { EngineEvent } from "./events/EngineEvent";
import { GameState } from "./models";
import { PendingResolution } from "./resolution";
import { PendingInteraction } from "./interactions";

export interface EngineContext {

    state: GameState;

    cardDatabase: Record<string, CardDefinition>;

    commandQueue: GameCommand[];

    eventQueue: EngineEvent[];

    pendingResolutions: PendingResolution[];

    pendingInteractions: PendingInteraction[];

}