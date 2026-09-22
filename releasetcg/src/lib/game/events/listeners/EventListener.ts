import { EngineContext } from "@/lib/game/EngineContext";

import {
    EngineEvent,
} from "../EngineEvent";

export interface EventListener<
    T extends EngineEvent = EngineEvent,
> {

    accepts(
        event: EngineEvent,
    ): event is T;

    execute(
        context: EngineContext,
        event: T,
    ): void;

}