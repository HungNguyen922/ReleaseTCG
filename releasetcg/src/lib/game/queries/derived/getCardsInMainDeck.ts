import {
    PlayerReference,
    createMainDeckReference,
} from "../../refs";

import { EngineContext } from "../../EngineContext";

import { getCardsInPile } from "./getCardsInPile";

export function getCardsInMainDeck(
    context: EngineContext,
    player: PlayerReference,
) {

    return getCardsInPile(
        context,
        createMainDeckReference(player.id),
    );

}