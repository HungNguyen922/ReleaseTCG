"use client";

import {
    DragEvent,
} from "react";

import {
    useGame,
} from "../../providers/GameProvider";

import {
    useGameRevision,
} from "../../hooks/useGameRevision";

import GameCard from "../cards/GameCard";

import { toPlayableCardFromInstance } from "../../utils/toPlayableCardFromInstance";

import {
    PlayerSide,
} from "@/lib/game/models";

interface Props {

    row: number;

    column: number;

}

export default function GateZone({

    row,

    column,

}: Props) {

    const {
        engine, revision
    } = useGame();

    console.log("revision", revision);

    const side =
        row === 0
            ? PlayerSide.Top
            : PlayerSide.Bottom;

    const gate =
        engine.state.board.gateZones.find(
            gate =>
                gate.side === side &&
                gate.position === column,
        );

    const topCard =
        gate?.stack?.cards[0];

    const cardDefinition =
        topCard
            ? engine.cardDefinition(
                topCard,
            )
            : undefined;
    
    const playableCard =
        topCard && cardDefinition
            ? toPlayableCardFromInstance(
                topCard,
                cardDefinition,
            )
            : undefined;

    function handleDragOver(
        event: DragEvent<HTMLDivElement>,
    ) {

        event.preventDefault();

        event.dataTransfer.dropEffect =
            "move";

    }

    function handleDrop(
        event: DragEvent<HTMLDivElement>,
    ) {

        event.preventDefault();

        console.log("1. DROP FIRED");

        const cardId =
            event.dataTransfer.getData(
                "application/x-release-tcg-card",
            );

        console.log(
            "2. CARD ID:",
            cardId,
        );

        if (!cardId) {
            return;
        }

        const card =
            engine.card(cardId);

        console.log(
            "3. CARD:",
            card,
        );

        if (!card) {
            return;
        }

        console.log(
            "4. CALLING BURN",
        );

        engine.burn(
            card,
            side,
            column,
        );

        console.log(
            "5. BURN FINISHED",
        );

        console.log(
            "DROPPING CARD",
            card.id,
            "ONTO",
            side,
            column,
        );
    }

    console.log(
        "FULL STACK",
        side,
        column,
        gate?.stack?.cards.map(c => c.id),
    );
    return (

        <div
            onDragOver={
                handleDragOver
            }

            onDrop={
                handleDrop
            }

            className="h-[25vh] aspect-[5/7] overflow-hidden rounded-xl border bg-muted transition hover:bg-muted/80"
        >

            {
                playableCard
                    ? (
                        <GameCard
                            card={playableCard}
                        />
                    )
                    : (
                        <div
                            className="flex h-full items-center justify-center text-sm text-muted-foreground"
                        >
                            Empty Gate
                        </div>
                    )
            }

        </div>

    );

}