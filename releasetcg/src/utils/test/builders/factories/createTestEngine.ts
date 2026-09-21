import {

    createEngineContext,

} from "@/lib/game/createEngineContext";

import {

    createCardDatabase,

} from "@/lib/game/cards";

import {

    CardDefinition,

} from "@/lib/game/models";

import {

    createTestGameState,

} from "./createTestGameState";

export interface TestEngineOptions {

    stateOverrides?:
        Parameters<
            typeof createTestGameState
        >[0];

    cards?: CardDefinition[];

}

export function createTestEngine(

    options: TestEngineOptions = {},

) {

    const state =

        createTestGameState(

            options.stateOverrides,

        );

    return createEngineContext(

        state,

        createCardDatabase(

            options.cards ?? [],

        ),

    );

}