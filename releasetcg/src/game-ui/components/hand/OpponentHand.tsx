"use client";

import {
    useMemo,
} from "react";

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

export default function OpponentHand() {

    const {
        engine,
        revealP2,
        selectedCardIds,
        toggleCard,
        activePlayerId,
    } = useGame();

    useGameRevision();

    const revision = useGameRevision();

    const cards = useMemo(
        () => engine.hand("P2").map(card => {
            const definition = engine.cardDefinition(card);
            return toPlayableCardFromInstance(card, definition);
        }),
        [engine, revision, revealP2],
    );

    const isActive =
        activePlayerId === "P2";

    return (

        <HandFan
            cards={cards}
            hidden={!revealP2}
            position="top"
            selectedCardIds={isActive ? selectedCardIds : []}
            onCardClick={
                isActive
                    ? card => toggleCard(card.id)
                    : undefined
            }
        />

    );

}