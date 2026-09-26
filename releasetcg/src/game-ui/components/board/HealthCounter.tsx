// src/game-ui/components/board/HealthCounter.tsx
"use client";

import { useGame } from "../../providers/GameProvider";
import { useGameRevision } from "../../hooks/useGameRevision";

interface Props {
    opponent?: boolean;
}

export default function HealthCounter({ opponent = false }: Props) {

    const { engine } = useGame();
    useGameRevision();

    const playerId = opponent ? "P2" : "P1";

    const player = engine.state.players.find(p => p.id === playerId);

    return (
        <div
            className="flex aspect-square h-[8vh] items-center justify-center rounded-full border-2 border-primary bg-card text-2xl font-bold shadow-md"
        >
            {player?.health ?? 0}
        </div>
    );

}