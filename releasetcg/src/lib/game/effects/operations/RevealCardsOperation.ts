import {
    CardReference,
    PlayerReference,
} from "@/lib/game/refs";

export interface RevealCardsOperation {

    player: PlayerReference;

    cards: CardReference[];

}

export function createRevealCardsOperation(
    player: PlayerReference,
    cards: CardReference[],
): RevealCardsOperation {

    return {

        player,

        cards,

    };

}