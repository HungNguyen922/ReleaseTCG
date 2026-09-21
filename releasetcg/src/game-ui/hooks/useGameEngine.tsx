import {
    useEffect,
    useRef,
    useState,
} from "react";

import {
    TestGame,
} from "@/utils/test/builders/TestGame";

import { CardDefinition } from "@/lib/game/models";

import { buildPlaceholderDeck } from "@/utils/test/cards/buildPlaceholderDeck";

export function useGameEngine(
    cardDefinitions: CardDefinition[],
) {

    const [engine, setEngine] =
        useState<TestGame | null>(null);

    const hasConstructed =
        useRef(false);

    useEffect(() => {

        if (hasConstructed.current) {
            return;
        }

        hasConstructed.current = true;

        const cardDatabase =
            Object.fromEntries(
                cardDefinitions.map(
                    card => [card.id, card],
                ),
            );

        setEngine(

            new TestGame({

                cardDefinitions:
                    cardDatabase,

                player1Deck:
                    buildPlaceholderDeck(
                        cardDefinitions,
                    ),

                player2Deck:
                    buildPlaceholderDeck(
                        cardDefinitions,
                    ),

            }),

        );

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return engine;

}