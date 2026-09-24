import {
    PendingInteraction,
    PendingInteractionType,
} from ".";

import {
    Target,
} from "../targeting/models";

import {
    CardReference,
} from "@/lib/game/refs";

import {
    CardOrderingResponse,
} from "@/lib/game/ordering/models";

export function processPendingInteraction(

    interaction: PendingInteraction,

    response: unknown,

): void {

    switch (

        interaction.type

    ) {

        case PendingInteractionType.TargetSelection:

            interaction.resolve(

                response as Target,

            );

            return;

        case PendingInteractionType.CardSelection:

            interaction.resolve(

                response as CardReference[],

            );

            return;

        case PendingInteractionType.CardOrdering:

            interaction.resolve(

                response as CardOrderingResponse,

            );

            return;

        case PendingInteractionType.BooleanChoice:

            interaction.resolve(

                response as boolean,

            );

            return;

        default:

            throw new Error(

                "Unknown pending interaction.",

            );

    }

}