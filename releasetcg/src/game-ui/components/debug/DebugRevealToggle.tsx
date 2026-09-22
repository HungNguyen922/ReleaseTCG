"use client";

import {
    useGame,
} from "../../providers/GameProvider";

export default function DebugRevealToggle() {

    const {
        revealP2,
        toggleRevealP2,
    } = useGame();

    return (

        <button
            onClick={toggleRevealP2}
            className="absolute top-4 right-4 z-50 rounded-lg border bg-card px-3 py-1 text-xs shadow-md hover:bg-muted"
        >

            {revealP2 ? "Hide P2 Hand" : "Reveal P2 Hand"}

        </button>

    );

}