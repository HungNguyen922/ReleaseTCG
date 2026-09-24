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
    BoardPosition,
    LocationType,
    PlayerSide,
    PlayType,
} from "@/lib/game/models";

import { GateReference } from "@/lib/game/refs";

import { locationRefsEqual } from "../../providers/GameProvider";

interface Props {

    row: number;

    column: number;

}

export default function GateZone({

    row,

    column,

}: Props) {

    const {
        engine,
        revision,
        selectedDestinations,
        toggleDestination,
        playCards,
    } = useGame();

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

    const gateRef: GateReference = {
        locationType: LocationType.Gate,
        side,
        position: column as BoardPosition,
    };

    const isSelected = selectedDestinations.some(
        ref => locationRefsEqual(ref, gateRef),
    );

    function handleClick() {
        toggleDestination(gateRef);
    }

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

        const cardId =
            event.dataTransfer.getData(
                "application/x-release-tcg-card",
            );

        if (!cardId) {
            return;
        }

        // Goes through the same playCards() path as the play bar,
        // so it respects "acting as" and surfaces errors instead
        // of throwing.
        playCards(
            PlayType.Burn,
            [cardId],
            [gateRef],
        );

    }

    return (

        <div
            onClick={handleClick}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            className={`h-[25vh] aspect-[5/7] overflow-hidden rounded-xl border bg-muted transition hover:bg-muted/80 cursor-pointer ${
                isSelected ? "ring-4 ring-primary" : ""
            }`}
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