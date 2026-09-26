"use client";

import { useGame } from "../../providers/GameProvider";
import { useGameRevision } from "../../hooks/useGameRevision";
import { BOARD } from "@/game-ui/constants/boardMetrics";
import { PileType } from "@/lib/game/models";
import PileBack from "./PileBack";

interface Props {
    opponent?: boolean;
}

export default function ExtraDeckPile({
    opponent,
}: Props) {

    const { engine } = useGame();
    useGameRevision();

    const ownerId = opponent ? "P2" : "P1";

    const pile = engine.state.piles.find(
        p => p.pileType === PileType.ExtraDeck && p.ownerId === ownerId,
    );

    return (
        <div style={{ height: BOARD.extraDeckHeight }} className="aspect-[5/7]">
            <PileBack count={pile?.cards.length ?? 0} />
        </div>
    );
}