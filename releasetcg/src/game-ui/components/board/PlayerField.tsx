"use client";

import ExtraDeckPile from "../piles/ExtraDeckPile";

import HealthCounter from "./HealthCounter";

export default function PlayerField() {

    return (

        <section className="absolute bottom-[2%] right-[2%]">

            <div className="flex items-center gap-4">

                <HealthCounter />

                <ExtraDeckPile />

            </div>

        </section>

    );

}