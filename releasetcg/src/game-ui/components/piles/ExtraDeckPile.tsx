"use client";

import { BOARD } from "@/game-ui/constants/boardMetrics";

interface Props {

    opponent?: boolean;

}

export default function ExtraDeckPile({

    opponent,

}: Props) {

    return (

        <div
            style={{
                height: BOARD.extraDeckHeight,
            }}
            className="aspect-[5/7] rounded-lg border"
        >

            {opponent ? "Opponent Extra" : "Extra Deck"}

        </div>

    );

}