"use client";

import OpponentGateRow from "./OpponentGateRow";
import PlayerGateRow from "./PlayerGateRow";
import SharedCenter from "./SharedCenter";

export default function Battlefield() {

    return (

        <section
            className="absolute left-1/2 top-1/2 h-[90%] w-[90%] -translate-x-1/2 -translate-y-1/2"
        >

            <OpponentGateRow />

            <SharedCenter />

            <PlayerGateRow />

        </section>

    );

}