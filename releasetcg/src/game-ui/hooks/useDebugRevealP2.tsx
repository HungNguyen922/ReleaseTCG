"use client";

import { useState } from "react";

export function useDebugRevealP2() {

    const [revealP2, setRevealP2] =
        useState(false);

    return {
        revealP2,
        toggle: () => setRevealP2(v => !v),
    };

}