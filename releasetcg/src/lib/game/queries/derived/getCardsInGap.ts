import {
    createGapReference,
} from "../../refs";

import { EngineContext } from "../../EngineContext";

import { getCardsInPile } from "./getCardsInPile";

export function getCardsInGap(
    context: EngineContext,
) {

    return getCardsInPile(
        context,
        createGapReference(),
    );

}