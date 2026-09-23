import { EngineContext } from "../../EngineContext";

import {
    PlayerReference,
} from "../../refs";

import {
    PlayerState,
} from "../../models";

export function findPlayer(
    context: EngineContext,
    reference: PlayerReference,
): PlayerState | null {

    return (
        context.state.players.find(
            player => player.id === reference.id,
        ) ?? null
    );

}