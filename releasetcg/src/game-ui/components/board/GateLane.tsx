"use client";

import GateZone from "./GateZone";
import SetZone from "./SetZone";

import { BOARD } from "@/game-ui/constants/boardMetrics";

interface Props {

    side: "top" | "bottom";

    column: number;

}

export default function GateLane({

    side,

    column,

}: Props) {

    const gateRow =

        side === "top"

            ? 0

            : 1;

    return (

        <div
            className="flex flex-col items-center justify-between"
            style={{
                height: BOARD.laneHeight,
            }}
        >

            {

                side === "top" && (

                    <SetZone
                        index={column}
                    />

                )

            }

            <GateZone

                row={gateRow}

                column={column}

            />

            {

                side === "bottom" && (

                    <SetZone
                        index={column}
                    />

                )

            }

        </div>

    );

}