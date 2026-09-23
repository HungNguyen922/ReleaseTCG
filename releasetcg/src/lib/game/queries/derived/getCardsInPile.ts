import {
    CardInstance,
} from "../../models";

import {
    PileReference,
} from "../../refs";

import { EngineContext } from "../../EngineContext";

import { findPile } from "../lookup/findPile";

export function getCardsInPile(
    context: EngineContext,
    reference: PileReference,
): CardInstance[] {

    return (
        findPile(
            context,
            reference,
        )?.cards ?? []
    );

}