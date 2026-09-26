"use client";

import ExtraDeckPile from "../piles/ExtraDeckPile";
import HealthCounter from "./HealthCounter";

export default function OpponentField() {

    return (

        <section className="absolute left-[2%] top-[2%]">

            <div className="flex items-center gap-4">

                <ExtraDeckPile opponent />

                <HealthCounter opponent />

            </div>

        </section>

    );

}