"use client";

import { BOARD } from "@/game-ui/constants/boardMetrics";

export default function GapPile() {

    return (

        <div
            style={{
                height: BOARD.pileHeight,
            }}
            className="aspect-[5/7] rounded-lg border"
        >

            Gap

        </div>

    );

}