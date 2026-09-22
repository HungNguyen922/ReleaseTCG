import { ActionType } from "./ActionType";
import { CardReference } from "../refs/CardReference";

export interface RevealCardsAction {
    type: ActionType.RevealCards;

    cards: CardReference[];
}

export function createRevealCardsAction(
    cards: CardReference[],
): RevealCardsAction {
    return {
        type: ActionType.RevealCards,
        cards,
    };
}