import {
    createPublicPileReference,
} from "../../refs";

import { EngineContext } from "../../EngineContext";

import { getCardsInPile } from "./getCardsInPile";

export function getCardsInPublicPile(
    context: EngineContext,
) {

    return getCardsInPile(
        context,
        createPublicPileReference(),
    );

}