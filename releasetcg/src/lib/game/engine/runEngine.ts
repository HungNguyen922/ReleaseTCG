import { EngineContext } from "@/lib/game/EngineContext";

import {
    processEngine,
} from "./processEngine";

export function runEngine(
    context: EngineContext,
): void {

    processEngine(
        context,
    );

}