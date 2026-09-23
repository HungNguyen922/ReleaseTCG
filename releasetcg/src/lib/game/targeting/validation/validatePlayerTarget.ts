import {
    EngineContext,
} from "@/lib/game/EngineContext";

import {
    PlayerTarget,
} from "../models";

import {
    resolvePlayerTarget,
} from "../resolvers";

export function validatePlayerTarget(
    context: EngineContext,
    target: PlayerTarget,
): boolean {

    const player = resolvePlayerTarget(
        context,
        target,
    );

    return player !== null;

}