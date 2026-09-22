import { EngineContext } from "@/lib/game/EngineContext";

import {
    CardDefinition,
    CardInstance,
} from "@/lib/game/models";

export function findCardDefinition(
    context: EngineContext,
    card: CardInstance,
): CardDefinition {

    const definition =
        context.cardDatabase[
            card.cardId
        ];

    if (!definition) {

        throw new Error(
            `Missing card definition: ${card.cardId}`,
        );

    }

    return definition;

}