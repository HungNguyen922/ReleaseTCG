"use client";

interface Props {

    children: React.ReactNode;

    className?: string;

}

export default function BoardColumn({

    children,

    className = "",

}: Props) {

    return (

        <div
            className={`flex flex-col items-center justify-center ${className}`}
        >

            {children}

        </div>

    );

}