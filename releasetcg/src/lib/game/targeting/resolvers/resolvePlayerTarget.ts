import { EngineContext } from "@/lib/game/EngineContext";

import { PlayerTarget } from "../models";

export function resolvePlayerTarget(
    context: EngineContext,
    target: PlayerTarget,
) {

    return context.state.players.find(

        player =>

            player.id === target.reference.id,

    ) ?? null;

}