"use client";

import {
    useGame,
} from "../../providers/GameProvider";

import {
    useGameRevision,
} from "../../hooks/useGameRevision";

import HandFan from "./HandFan";

import {
    toPlayableCardFromInstance,
} from "@/game-ui/utils/toPlayableCardFromInstance";

export default function PlayerHand() {

    const {
        engine,
        selectedCardIds,
        toggleCard,
    } = useGame();

    useGameRevision();

    const cards =
        engine
            .hand("P1")
            .map(card => {

                const definition =
                    engine.cardDefinition(
                        card,
                    );

                return toPlayableCardFromInstance(
                    card,
                    definition,
                );

            });

    return (

        <HandFan
            cards={cards}
            position="bottom"
            selectedCardIds={selectedCardIds}
            onCardClick={card => toggleCard(card.id)}
        />

    );
}