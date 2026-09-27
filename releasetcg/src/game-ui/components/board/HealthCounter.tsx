"use client";

import { useEffect, useRef, useState } from "react";

import { useGame } from "../../providers/GameProvider";
import { useGameRevision } from "../../hooks/useGameRevision";

type Props = {
    playerId: "P1" | "P2";
};

export default function HealthCounter({ playerId }: Props) {
    const { engine } = useGame();
    useGameRevision();

    const player = engine.state.players.find(p => p.id === playerId);
    const health = player?.health ?? 0;

    const previousHealth = useRef(health);
    const [delta, setDelta] = useState<number | null>(null);
    const [flash, setFlash] = useState<"damage" | "heal" | null>(null);
    const [changeId, setChangeId] = useState(0);

    useEffect(() => {
        const diff = health - previousHealth.current;
        previousHealth.current = health;

        if (diff === 0) {
            return;
        }

        setDelta(diff);
        setFlash(diff < 0 ? "damage" : "heal");
        setChangeId(id => id + 1);

        const timeout = setTimeout(() => {
            setDelta(null);
            setFlash(null);
        }, 900);

        return () => clearTimeout(timeout);
    }, [health]);

    return (
        <div className="relative flex items-center gap-2 rounded-lg border bg-card px-3 py-1.5">
            <span className="text-xs font-medium text-muted-foreground">
                {playerId === "P1" ? "You" : "Opponent"}
            </span>

            <span
                className={`text-lg font-bold transition-colors duration-300 ${
                    flash === "damage"
                        ? "text-red-500"
                        : flash === "heal"
                            ? "text-emerald-500"
                            : "text-foreground"
                }`}
            >
                {health}
            </span>

            {delta !== null && (
                <span
                    key={changeId}
                    className={`pointer-events-none absolute -top-4 right-2 text-sm font-bold animate-[float-up_0.9s_ease-out] ${
                        delta < 0 ? "text-red-500" : "text-emerald-500"
                    }`}
                >
                    {delta > 0 ? `+${delta}` : delta}
                </span>
            )}
        </div>
    );
}