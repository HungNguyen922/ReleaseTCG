import {
    DatabaseCard,
} from "@/types/cards";

import {
    CardColor,
    CardDefinition,
} from "@/lib/game/models";

function parseColors(
    card: DatabaseCard,
): CardColor[] {

    const values = [
        card.Color1,
        card.Color2,
        card.Color3,
        card.Color4,
    ];

    return values
        .map(color => color?.trim().toLowerCase() ?? null)
        .filter(
            (color): color is CardColor =>
                color !== null &&
                (Object.values(CardColor) as string[]).includes(color),
        ) as CardColor[];

}

export function toCardDefinition(
    card: DatabaseCard,
): CardDefinition {

    return {

        id: card.id,

        name: card.Name,

        power: card.Power,

        bulk: card.Bulk,

        colors: parseColors(card),

        //
        // TODO:
        // Parse trait from database.
        //

        trait: null,

        //
        // TODO:
        // Parse abilities JSON.
        //

        abilities: [],

        cardNumber: card.CardNumber,

        setName: card.SetName,

    };

}