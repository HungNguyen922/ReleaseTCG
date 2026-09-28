"use client";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

import GameCard from "../cards/GameCard";

import type { PlayableCard } from "@/types/cards";

type Props = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    // Top-first ordering: index 0 is the card physically on top of the Gate.
    cards: PlayableCard[];
    isTopPure: boolean;
};

export default function GateStackModal({
    open,
    onOpenChange,
    cards,
    isTopPure,
}: Props) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-h-[85vh] max-w-4xl overflow-y-auto sm:max-w-[95vw]">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                        Gate ({cards.length} {cards.length === 1 ? "card" : "cards"})

                        {isTopPure && (
                            <span className="rounded bg-emerald-500 px-1.5 py-0.5 text-[10px] font-bold text-white">
                                Pure
                            </span>
                        )}
                    </DialogTitle>
                </DialogHeader>

                <div className="flex flex-wrap gap-4">
                    {cards.map((card, i) => (
                        <div
                            key={card.id}
                            className="flex flex-col items-center gap-1"
                        >
                            <div className="aspect-[5/7] w-[140px]">
                                <GameCard card={card} />
                            </div>

                            <span className="text-xs text-muted-foreground">
                                {i === 0 ? "Top" : `+${i}`}
                            </span>
                        </div>
                    ))}
                </div>
            </DialogContent>
        </Dialog>
    );
}