"use client";

interface Props {

    className?: string;

}

export default function CardBack({

    className = "",

}: Props) {

    return (

        <div
            className={`
                flex h-full w-full items-center justify-center overflow-hidden rounded-xl border bg-muted shadow-lg
                ${className}
            `}
        >

            <div
                className="flex h-[90%] w-[85%] items-center justify-center rounded-lg border"
            >

                <span className="text-sm font-semibold">
                    ReleaseTCG
                </span>

            </div>

        </div>

    );

}
