import {
    CardReference,
} from "@/lib/game/refs";

export interface PendingResolution {

    card: CardReference;

}

export function createPendingResolution(
    card: CardReference,
): PendingResolution {

    return {

        card,

    };

}