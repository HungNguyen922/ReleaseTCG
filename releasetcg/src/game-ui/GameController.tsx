"use client";

import { GameProvider } from "./providers/GameProvider";

import { useGameEngine } from "./hooks/useGameEngine";

import GameBoard from "./components/board/GameBoard";

import TurnInfo from "./components/board/TurnInfo";
import PhaseAdvanceButton from "./components/board/PhaseAdvanceButton";


import OpponentHand from "./components/hand/OpponentHand";
import PlayerHand from "./components/hand/PlayerHand";
import DebugRevealToggle from "./components/debug/DebugRevealToggle";

import { CardDefinition } from "@/lib/game/models";

export default function GameController(
    props: {
        cardDefinitions: CardDefinition[];
    },
) {

    const engine =
        useGameEngine(
            props.cardDefinitions,
        );

    if (!engine) {

        return (
            <div className="flex h-full w-full items-center justify-center">
                Loading game...
            </div>
        );

    }

    return (
        
        <GameProvider engine={engine}>

            <div className="relative h-full w-full overflow-hidden bg-background">

                <GameBoard />

                <OpponentHand />

                <PlayerHand />

                <TurnInfo />

                <PhaseAdvanceButton />

                <DebugRevealToggle />

            </div>

        </GameProvider>

    );

}