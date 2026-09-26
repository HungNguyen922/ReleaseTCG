"use client";

import { BOARD } from "@/game-ui/constants/boardMetrics";

export default function GapPile() {

    return (

        <div
            style={{
                height: BOARD.pileHeight,
            }}
            className="flex aspect-[5/7] items-center justify-center rounded-lg border text-sm text-muted-foreground"
        >

            Gap

        </div>

    );

}