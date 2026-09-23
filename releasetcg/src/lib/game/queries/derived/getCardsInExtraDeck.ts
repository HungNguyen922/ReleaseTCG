import {
    PlayerReference,
    createExtraDeckReference,
} from "../../refs";

import { EngineContext } from "../../EngineContext";

import { getCardsInPile } from "./getCardsInPile";

export function getCardsInExtraDeck(
    context: EngineContext,
    player: PlayerReference,
) {

    return getCardsInPile(
        context,
        createExtraDeckReference(player.id),
    );

}