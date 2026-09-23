import { EngineContext } from "@/lib/game/EngineContext";

import {
    CardInstance,
} from "@/lib/game/models";

import {
    EngineEvent,
} from "@/lib/game/events";

export interface AbilityContext {

    game: EngineContext;

    source: CardInstance;

    event?: EngineEvent;

}