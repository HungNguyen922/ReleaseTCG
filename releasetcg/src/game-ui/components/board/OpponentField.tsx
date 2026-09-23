"use client";

import ExtraDeckPile from "../piles/ExtraDeckPile";

export default function OpponentField() {

    return (

        <section className="absolute left-[2%] top-[2%]">

            <div className="flex gap-4">

                <ExtraDeckPile opponent />

            </div>

        </section>

    );

}