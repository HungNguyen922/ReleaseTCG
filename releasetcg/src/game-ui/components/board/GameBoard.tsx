"use client";

import OpponentField from "./OpponentField";
import Battlefield from "./Battlefield";
import PlayerField from "./PlayerField";

export default function GameBoard() {

    return (

        <main className="relative h-full w-full overflow-hidden">

            <Battlefield />

            <OpponentField />

            <PlayerField />

        </main>

    );

}