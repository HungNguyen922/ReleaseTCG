"use client";

import { useGame } from "../../providers/GameProvider";
import { useGameRevision } from "../../hooks/useGameRevision";
import { BOARD } from "@/game-ui/constants/boardMetrics";
import { PileType } from "@/lib/game/models";
import PileBack from "./PileBack";

export default function PublicPile() {

    const { engine } = useGame();
    useGameRevision();

    const pile = engine.state.piles.find(
        p => p.pileType === PileType.PublicPile,
    );

    return (
        <div style={{ height: BOARD.pileHeight }} className="aspect-[5/7]">
            <PileBack count={pile?.cards.length ?? 0} />
        </div>
    );
}