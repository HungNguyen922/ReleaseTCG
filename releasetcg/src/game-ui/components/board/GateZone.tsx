"use client";

import { DragEvent, useState } from "react";

import { useGame } from "../../providers/GameProvider";

import GameCard from "../cards/GameCard";
import GateStackPreview from "./GateStackPreview";
import GateStackModal from "./GateStackModal";

import { toPlayableCardFromInstance } from "../../utils/toPlayableCardFromInstance";

import { detectAttackPattern } from "@/lib/game/queries/attack";
import { isPure } from "@/lib/game/queries/purity";

import {
    BoardPosition,
    LocationType,
    PlayerSide,
    PlayType,
} from "@/lib/game/models";

import { GateReference } from "@/lib/game/refs";

import { locationRefsEqual } from "../../providers/GameProvider";

import { PlayableCard } from "@/types/cards";

interface Props {
    row: number;
    column: number;
}

export default function GateZone({ row, column }: Props) {
    const {
        engine,
        selectedDestinations,
        toggleDestination,
        playCards,
    } = useGame();

    const [isHovered, setIsHovered] = useState(false);
    const [hoverAnchor, setHoverAnchor] = useState<DOMRect | null>(null);

    const side = row === 0 ? PlayerSide.Top : PlayerSide.Bottom;

    const gate = engine.state.board.gateZones.find(
        gate => gate.side === side && gate.position === column,
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

    // Top-first ordering: index 0 is the card physically on top of the Gate.
    const allCards = gate?.stack?.cards ?? [];

    // inside GateZone, next to the other useState calls
    const [isStackOpen, setIsStackOpen] = useState(false);

    const playableCards: PlayableCard[] = allCards
        .map(card => {
            const definition = engine.cardDefinition(card);
            return definition
                ? toPlayableCardFromInstance(card, definition)
                : null;
        })
        .filter((c): c is PlayableCard => c !== null);

    const isTopPure = allCards.length > 0
        ? isPure(engine.context, allCards[0])
        : false;

    function handleMouseEnter(event: React.MouseEvent<HTMLDivElement>) {
        setIsHovered(true);
        setHoverAnchor(event.currentTarget.getBoundingClientRect());
    }

    function handleMouseLeave() {
        setIsHovered(false);
        setHoverAnchor(null);
    }

    function handleContextMenu(event: React.MouseEvent<HTMLDivElement>) {
        event.preventDefault(); 

        if (playableCards.length === 0) {
            return;
        }

        // close the hover preview so it doesn't sit behind the modal
        setIsHovered(false);
        setHoverAnchor(null);

        setIsStackOpen(true);
    }

    function handleDragOver(event: DragEvent<HTMLDivElement>) {
        event.preventDefault();
        event.dataTransfer.dropEffect = "move";
    }

    function handleDrop(event: DragEvent<HTMLDivElement>) {
        event.preventDefault();

        const cardId = event.dataTransfer.getData(
            "application/x-release-tcg-card",
        );

        if (!cardId) {
            return;
        }

        playCards(PlayType.Burn, [cardId], [gateRef]);
    }

    return (
        <>
            <div
                onClick={handleClick}
                onContextMenu={handleContextMenu}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                className={`h-[25vh] aspect-[5/7] rounded-xl border bg-muted transition hover:bg-muted/80 cursor-pointer ${
                    isSelected ? "ring-4 ring-primary" : ""
                }`}
            >
                {playableCards.length ? (
                    <div className="relative h-full w-full">
                        {[...playableCards].reverse().map((card, i) => (
                            <div
                                key={card.id}
                                className="absolute inset-0"
                                style={{
                                    transform: `translate(${i * 2}%, ${i * -2}%)`,
                                    zIndex: i + 1,
                                }}
                            >
                                <GameCard card={card} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
                        Empty Gate
                    </div>
                )}

                <GateStackPreview
                    cards={playableCards.slice(0, 3)}
                    height={allCards.length}
                    isTopPure={isTopPure}
                    anchor={isHovered ? hoverAnchor : null}
                />
            </div>
            <GateStackModal
                open={isStackOpen}
                onOpenChange={setIsStackOpen}
                cards={playableCards}
                isTopPure={isTopPure}
            />
        </>
    );
}