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
    } = useGame();

    const revision = useGameRevision();

    const cards = useMemo(

        () =>

            engine
                .hand("P2")
                .map(card => {

                    const definition =
                        engine.cardDefinition(
                            card,
                        );

                    return toPlayableCardFromInstance(
                        card,
                        definition,
                    );

                }),

        [engine, revealP2, revision],

    );

    return (

        <HandFan
            cards={cards}
            hidden={!revealP2}
            position="top"
        />

    );

}