import { EngineContext } from "../../EngineContext";

import {
    CardInstance,
    LocationType,
} from "../../models";

import {
    LocationReference,
} from "../../refs";

import {
    findGate,
    findPile,
    findSetZone,
} from "../../queries";


export function insertCard(
    context: EngineContext,
    card: CardInstance,
    destination: LocationReference,
): void {

    switch (destination.locationType) {

        case LocationType.Gate: {

            const gate = findGate(
                context,
                destination,
            );

            if (!gate) {
                throw new Error(
                    "insertCard: destination gate not found.",
                );
            }

            if (!gate.stack) {
                gate.stack = {
                    cards: [],
                };
            }

            gate.stack.cards.unshift(
                card,
            );

            return;
        }


        case LocationType.Set: {

            const setZone = findSetZone(
                context,
                destination,
            );

            if (!setZone) {
                throw new Error(
                    "insertCard: destination set zone not found.",
                );
            }

            if (!setZone.stack) {
                throw new Error(
                    "insertCard: set zone has no stack.",
                );
            }

            if (setZone.stack.cards.length > 0) {
                throw new Error(
                    "insertCard: set zone already occupied.",
                );
            }

            setZone.stack.cards.unshift(
                card,
            );

            return;

        }


        case LocationType.Pile: {

            const pile = findPile(
                context,
                destination,
            );

            if (!pile) {
                throw new Error(
                    "insertCard: destination pile not found.",
                );
            }

            pile.cards.unshift(
                card,
            );

            return;
        }


        default:
            throw new Error(
                "insertCard: unsupported destination.",
            );

    }

}