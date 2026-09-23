// converts a raw Supabase row into a PlayableCard that can be used in the UI.
import {
    DatabaseCard,
} from "@/types/cards";

import {
    CardDefinition,
} from "@/lib/game/models";

import {
    CardColor,
} from "@/lib/game/models";

function parseColor(
    color: string | null,
): CardColor | null {

    switch (color) {

        case CardColor.Red:
        case CardColor.Orange:
        case CardColor.Yellow:
        case CardColor.Green:
        case CardColor.Cyan:
        case CardColor.Blue:
        case CardColor.Violet:
        case CardColor.Magenta:
        case CardColor.Pink:

            return color;

        default:

            return null;

    }

}

function parseColors(
    card: DatabaseCard,
): CardColor[] {

    return [

        parseColor(card.Color1),

        parseColor(card.Color2),

        parseColor(card.Color3),

        parseColor(card.Color4),

    ].filter(

        (
            color,
        ): color is CardColor =>

            color !== null,

    );

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

        trait: null,

        abilities: [],

        cardNumber: card.CardNumber,

        setName: card.SetName,

    };

}