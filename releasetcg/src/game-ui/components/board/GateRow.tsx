"use client";

import GateLane from "./GateLane";

interface Props {

    side: "top" | "bottom";

}

export default function GateRow({

    side,

}: Props) {

    return (

        <div
            className="flex items-center gap-[2vw]"
        >

            <GateLane
                side={side}
                column={0}
            />

            <GateLane
                side={side}
                column={1}
            />

            <GateLane
                side={side}
                column={2}
            />

        </div>

    );

}