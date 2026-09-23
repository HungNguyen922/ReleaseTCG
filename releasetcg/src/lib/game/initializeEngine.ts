import {
    GameState,
} from "@/lib/game/models";

import {
    createEngineContext,
} from "./createEngineContext";

import {
    createCardDatabase,
    toCardDefinition,
} from "./cards";

import {
    getEngineCards,
} from "@/utils/supabase/cards/getEngineCards";

export async function initializeEngine(
    state: GameState,
) {

    const rows =
        await getEngineCards();

    const definitions = rows.map(
        row => {
            try {
                return toCardDefinition(row);
            }

            catch (error) {
                throw new Error(
                    `Failed to parse card "${row.name}" (${row.id}).`,
                );
            }
        },
    );

    return createEngineContext(

        state,

        createCardDatabase(
            definitions,
        ),

    );

}