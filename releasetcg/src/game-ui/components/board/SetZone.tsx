"use client";

import { DragEvent } from "react";

import { useGame } from "../../providers/GameProvider";

import GameCard from "../cards/GameCard";

import { BOARD } from "@/game-ui/constants/boardMetrics";

import {
    BoardPosition,
    LocationType,
    PlayerSide,
    PlayType,
} from "@/lib/game/models";

import { SetZoneReference } from "@/lib/game/refs";

import { toPlayableCardFromInstance } from "@/game-ui/utils/toPlayableCardFromInstance";

import { locationRefsEqual } from "../../providers/GameProvider";

interface Props {
    index: number;
    opponent?: boolean;
}

export default function SetZone({
    index,
    opponent = false,
}: Props) {

    const {
        engine,
        selectedDestinations,
        toggleDestination,
        playCards,
    } = useGame();

    const side =
        opponent
            ? PlayerSide.Top
            : PlayerSide.Bottom;

    const setZone =
        engine.state.board.setZones.find(
            zone =>
                zone.side === side &&
                zone.position === index,
        );

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

    const topCard =
        setZone?.stack?.cards[0];

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

        playCards(
            PlayType.Set,
            [cardId],
            [setRef],
        );

    }

    return (
        <div
            style={{
                height: BOARD.setHeight,
            }}
            onClick={handleClick}
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