import { EngineContext } from "../../EngineContext";

import {
    CardLocation,
    findGate,
    findPile,
    findSetZone,
} from "../../queries";

import {
    LocationType,
} from "../../models";

export function removeCard(
    context: EngineContext,
    location: CardLocation,
): void {

    switch (location.location.locationType) {

        case LocationType.Gate: {

            const gate = findGate(
                context,
                location.location,
            );

            if (!gate?.stack) {
                throw new Error(
                    "removeCard: gate stack not found.",
                );
            }

            gate.stack.cards.splice(
                location.position,
                1,
            );

            return;
        }


        case LocationType.Set: {

            const setZone = findSetZone(
                context,
                location.location,
            );

            if (!setZone?.stack) {
                throw new Error(
                    "removeCard: set zone not found.",
                );
            }

            setZone.stack.cards.splice(
                location.position,
                1,
            );

            return;

            }


        case LocationType.Pile: {

            const pile = findPile(
                context,
                location.location,
            );

            if (!pile) {
                throw new Error(
                    "removeCard: pile not found.",
                );
            }

            pile.cards.splice(
                location.position,
                1,
            );

            return;
        }

        default:
            throw new Error(
                "removeCard: unsupported location type.",
            );

    }

}