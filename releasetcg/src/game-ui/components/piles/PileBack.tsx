"use client";

import { CARD_BACK_IMAGE_URL } from "@/lib/images/getCardImageUrl";

interface Props {
    count: number;
    className?: string;
}

export default function PileBack({
    count,
    className = "",
}: Props) {

    return (
        <div
            className={`relative h-full w-full overflow-hidden rounded-xl border shadow-lg ${className}`}
        >
            <img
                src={CARD_BACK_IMAGE_URL}
                alt="Draw pile"
                draggable={false}
                className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 flex items-center justify-center">
                <span className="rounded-full bg-black/70 px-3 py-1 text-lg font-bold text-white">
                    {count}
                </span>
            </div>
        </div>
    );
}