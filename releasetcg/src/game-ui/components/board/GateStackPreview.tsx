"use client";

import { createPortal } from "react-dom";

import type { PlayableCard } from "@/types/cards";
import { PaletteChips } from "@/app/(app)/components/cards/PaletteChips";
import { StatChips } from "@/app/(app)/components/cards/StatChips";

type Props = {
    cards: PlayableCard[];
    height: number;
    isTopPure: boolean;
    anchor: DOMRect | null;
};

const POPUP_WIDTH = 280;
const GAP = 12;
const SCREEN_PADDING = 16;

function normalizeColor(color: string) {
    return color.charAt(0).toUpperCase() + color.slice(1);
}

export default function GateStackPreview({
    cards,
    height,
    isTopPure,
    anchor,
}: Props) {
    if (!anchor || cards.length === 0 || typeof document === "undefined") {
        return null;
    }

    let left = anchor.right + GAP;
    if (left + POPUP_WIDTH > window.innerWidth - SCREEN_PADDING) {
        left = anchor.left - POPUP_WIDTH - GAP;
    }
    left = Math.max(
        SCREEN_PADDING,
        Math.min(left, window.innerWidth - POPUP_WIDTH - SCREEN_PADDING),
    );

    const top = Math.max(
        SCREEN_PADDING,
        Math.min(anchor.top, window.innerHeight - SCREEN_PADDING),
    );

    return createPortal(
        <div
            className="pointer-events-none fixed z-50"
            style={{ left, top, width: POPUP_WIDTH }}
        >
            <div className="overflow-hidden rounded-xl border bg-background shadow-2xl">
                <div className="flex items-center justify-between border-b bg-muted px-3 py-1.5">
                    <span className="text-xs font-semibold text-muted-foreground">
                        Gate Height: {height}
                    </span>

                    {isTopPure && (
                        <span className="rounded bg-emerald-500 px-1.5 py-0.5 text-[10px] font-bold text-white">
                            Pure
                        </span>
                    )}
                </div>

                <div className="divide-y">
                    {cards.map((card, i) => (
                        <div key={card.id} className="flex items-center gap-2 p-2">
                            <span className="w-8 text-[10px] text-muted-foreground">
                                {i === 0 ? "Top" : `+${i}`}
                            </span>
                            <span className="min-w-0 flex-1 truncate text-sm font-medium">
                                {card.name}
                            </span>
                            <StatChips power={card.power} bulk={card.bulk} size="sm" />
                            <div className="w-[92px] shrink-0">
                                <PaletteChips
                                    palette={card.colors.map(normalizeColor)}
                                    size="sm"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>,
        document.body,
    );
}