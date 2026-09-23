"use client";

import GapPile from "../piles/GapPile";
import PublicPile from "../piles/PublicPile";

export default function SharedCenter() {

    return (

        <section
            className="pointer-events-none absolute left-1/2 top-1/2 flex w-[80%] -translate-x-1/2 -translate-y-1/2 items-center justify-between"
        >

            <GapPile />

            <PublicPile />

        </section>

    );

}