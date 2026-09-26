"use client";

import { CARD_BACK_IMAGE_URL } from "@/lib/images/getCardImageUrl";

interface Props {
    className?: string;
}

export default function CardBack({
    className = "",
}: Props) {

    return (
        <div
            className={`
                flex h-full w-full items-center justify-center overflow-hidden rounded-xl border bg-muted shadow-lg ${className}`}
        >
            <img
                src={CARD_BACK_IMAGE_URL}
                alt="Draw pile"
                draggable={false}
                className="h-full w-full object-cover"
            />
        </div>
    );

}
