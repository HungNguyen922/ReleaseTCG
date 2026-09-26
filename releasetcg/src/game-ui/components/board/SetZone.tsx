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
        selectedCardIds,
        toggleCard,
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

    const isOccupied =
        !!setZone?.stack &&
        setZone.stack.cards.length > 0;

    const setRef: SetZoneReference = {
        locationType: LocationType.Set,
        side,
        position: index as BoardPosition,
    };

    const isDestinationSelected = selectedDestinations.some(
        ref => locationRefsEqual(ref, setRef),
    );

    const topCard =
        setZone?.stack?.cards[0];

    const cardDefinition =
        topCard
            ? engine.cardDefinition(topCard)
            : undefined;

    const playableCard =
        topCard && cardDefinition
            ? toPlayableCardFromInstance(topCard, cardDefinition)
            : undefined;

    const isSelected =
        isOccupied
            ? selectedCardIds.includes(topCard!.id)
            : isDestinationSelected;

    function handleClick() {
        if (isOccupied) {
            if (topCard) toggleCard(topCard.id);
        } else {
            toggleDestination(setRef);
        }
    }

    function handleDragStart(event: DragEvent<HTMLDivElement>) {
        if (!topCard) return;
        event.dataTransfer.setData(
            "application/x-release-tcg-card",
            topCard.id,
        );
        event.dataTransfer.effectAllowed = "move";
    }

    function handleDragOver(event: DragEvent<HTMLDivElement>) {
        if (isOccupied) return;
        event.preventDefault();
        event.dataTransfer.dropEffect = "move";
    }

    function handleDrop(event: DragEvent<HTMLDivElement>) {
        event.preventDefault();

        if (isOccupied) return;

        const cardId =
            event.dataTransfer.getData(
                "application/x-release-tcg-card",
            );

        if (!cardId) return;

        playCards(PlayType.Set, [cardId], [setRef]);
    }

    return (
        <div
            style={{
                height: BOARD.setHeight,
            }}
            onClick={handleClick}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            draggable={isOccupied}
            onDragStart={handleDragStart}
            className={`aspect-[5/5] overflow-hidden rounded-lg border bg-muted transition hover:bg-muted/80 cursor-pointer ${
                isSelected ? "ring-4 ring-primary" : ""
            }`}
        >
            {playableCard ? (
                <GameCard card={playableCard} />
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