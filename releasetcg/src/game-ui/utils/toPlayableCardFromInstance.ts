// Converts a card sitting in an engine zone into a PlayableCard that can be used in the UI. 
// This is necessary because the engine's CardInstance and CardDefinition are not directly compatible with the PlayableCard type used in the UI.
import type {
    CardDefinition,
    CardInstance,
} from "@/lib/game/models";

import type {
    PlayableCard,
} from "@/types/cards";

export function toPlayableCardFromInstance(
    instance: CardInstance,
    definition: CardDefinition,
): PlayableCard {

    return {

        id: instance.id,

        name: definition.name,

        power: definition.power,

        bulk: definition.bulk,

        colors: definition.colors,

        trait: definition.trait?.name ?? null,

        effect1: null,

        effect2: null,

        clarify1: null,

        clarify2: null,

        clarify3: null,

        flavor: null,

        inspiration: null,

        artist: null,

        cardNumber: definition.cardNumber,

        setName: definition.setName,

    };

}