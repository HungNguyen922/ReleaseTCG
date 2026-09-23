import { EngineContext } from "@/lib/game/EngineContext";

import { TurnPhase } from "@/lib/game/models";

export function processInstantPhase(
    context: EngineContext,
): void {

    //
    // TODO:
    // Draw Leader
    // Quick effects
    //

    context.state.turn.phase =
        TurnPhase.Action;

}