import { EngineContext } from "@/lib/game/EngineContext";

export function markActionTaken(
    context: EngineContext,
): void {

    context.state.turn.actionTaken = true;

}