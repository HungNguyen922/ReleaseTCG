import {
    PlayerReference,
    createHandReference,
} from "../../refs";

import { EngineContext } from "../../EngineContext";

import { getCardsInPile } from "./getCardsInPile";

export function getCardsInHand(
    context: EngineContext,
    player: PlayerReference,
) {

    return getCardsInPile(
        context,
        createHandReference(player.id),
    );

}