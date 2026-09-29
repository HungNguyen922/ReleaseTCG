import { EngineContext } from "@/lib/game/EngineContext";

import {
    getParryOptions,
} from "./getParryOptions";

export function hasParryOptions(
    context: EngineContext,
    playerId: string,
): boolean {

    return (

        getParryOptions(
            context,
            playerId,
        ).length > 0

    );

}