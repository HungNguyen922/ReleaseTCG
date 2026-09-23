import {
    EngineContext,
} from "@/lib/game/EngineContext";

import {
    PlayerReference,
} from "@/lib/game/refs";

export function canTargetPlayer(
    context: EngineContext,
    reference: PlayerReference,
): boolean {

    return context.state.players.some(

        player => player.id === reference.id,

    );

}