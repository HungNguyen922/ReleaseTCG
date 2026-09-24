"use client";

import { DragEvent } from "react";

import { useGame } from "../../providers/GameProvider";
import { useGameRevision } from "../../hooks/useGameRevision";

import GameCard from "../cards/GameCard";

import { BOARD } from "@/game-ui/constants/boardMetrics";

import { PlayerSide } from "@/lib/game/models";
import { toPlayableCardFromInstance } from "@/game-ui/utils/toPlayableCardFromInstance";

import { LocationType, BoardPosition } from "@/lib/game/models";
import { SetZoneReference } from "@/lib/game/refs";
import { locationRefsEqual } from "../../providers/GameProvider";

interface Props {
    index: number;
    opponent?: boolean;
}

export default function SetZone({
    index,
    opponent = false,
}: Props) {

     const { engine, selectedDestinations, toggleDestination } = useGame();

    const revision =
        useGameRevision();

    console.log(
        "SET ZONE RENDER REVISION:",
        revision,
    );

    const side =
        opponent
            ? PlayerSide.Top
            : PlayerSide.Bottom;

    const setRef: SetZoneReference = {
        locationType: LocationType.Set,
        side,
        position: index as BoardPosition,
    };

    const isSelected = selectedDestinations.some(
        ref => locationRefsEqual(ref, setRef),
    );

    function handleClick() {
        toggleDestination(setRef);
    }

    const setZone =
        engine.state.board.setZones.find(
            zone =>
                zone.side === side &&
                zone.position === index,
        );

    const topCard =
        setZone?.stack?.cards[0];

    console.log(
        "SET ZONE:",
        side,
        index,
        setZone,
        topCard,
    );

    const cardDefinition =
        topCard
            ? engine.cardDefinition(topCard)
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

        const card =
            engine.card(cardId);

        if (!card) {
            return;
        }

        console.log(
            "SET DROP:",
            card.id,
        );

        engine.set(
            card,
            side,
            index,
        );

        console.log(
            "SET FINISHED",
        );

    }

    return (
        <div
            onClick={handleClick}
            style={{
                height: BOARD.setHeight,
            }}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            className={`aspect-[5/5] overflow-hidden rounded-lg border bg-muted transition hover:bg-muted/80 cursor-pointer ${
                isSelected ? "ring-4 ring-primary" : ""
            }`}
        >
            {cardDefinition ? (
                <GameCard
                    card={toPlayableCardFromInstance(
                        topCard!,
                        cardDefinition,
                    )}
                />
            ) : (
                <div
                    className="flex h-full items-center justify-center text-sm text-muted-foreground"
                >
                    Set {index}
                </div>
            )}
        </div>
    );
}