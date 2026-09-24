"use client";

import { useGame } from "../../providers/GameProvider";

import { PlayType } from "@/lib/game/models";

const PLAY_TYPES: { label: string; value: PlayType | "pass" }[] = [
    { label: "Burn", value: PlayType.Burn },
    { label: "Liminal", value: PlayType.Liminal },
    { label: "Load", value: PlayType.Set },
    { label: "Chain", value: PlayType.Chain },
    { label: "Construct", value: PlayType.Construct },
    { label: "Bound", value: PlayType.Bound },
    { label: "Split", value: PlayType.Split },
    { label: "Pass", value: "pass" },
];

export default function PlayTypeSelector() {

    const { activePlay, setActivePlay } = useGame();

    return (

        <div className="flex flex-wrap gap-1 rounded-lg border bg-card p-1 shadow-md">

            {PLAY_TYPES.map(({ label, value }) => (

                <button
                    key={value}
                    onClick={() =>
                        setActivePlay(activePlay === value ? null : value)
                    }
                    className={`rounded-md px-3 py-1.5 text-xs font-medium transition ${
                        activePlay === value
                            ? "bg-primary text-primary-foreground"
                            : "hover:bg-muted"
                    }`}
                >
                    {label}
                </button>

            ))}

        </div>

    );

}