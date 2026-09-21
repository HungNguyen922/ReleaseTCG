import { EngineContext } from "@/lib/game/EngineContext";

import {
    LocationReference,
} from "../../refs";

import {
    LocationType,
} from "../../models";

import {
    findGate,
    findPile,
    findSetZone,
} from "..";

export function findLocation(
    context: EngineContext,
    reference: LocationReference,
) {

    switch (reference.locationType) {

        case LocationType.Gate:
            return findGate(context, reference);

        case LocationType.Set:
            return findSetZone(context, reference);

        case LocationType.Pile:
            return findPile(context, reference);

        default:
            throw new Error("Unhandled location reference.");

    }

}