"use client";

import ExtraDeckPile from "../piles/ExtraDeckPile";

export default function PlayerField() {

    return (

        <section className="absolute bottom-[2%] right-[2%]">

            <div className="flex gap-4">

                <ExtraDeckPile />

            </div>

        </section>

    );

}