import {
    CardDefinition,
} from "@/lib/game/models";

export function createCardDatabase(
    cards: CardDefinition[],
): Record<string, CardDefinition> {

    return Object.fromEntries(

        cards.map(

            card => [

                card.id,

                card,

            ],

        ),

    );

}