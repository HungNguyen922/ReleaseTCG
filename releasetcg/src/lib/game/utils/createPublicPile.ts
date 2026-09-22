import { CardInstance } from "../models";
import { shuffle } from "./shuffle";

export function createPublicPile(
    playerOneRemaining: CardInstance[],
    playerTwoRemaining: CardInstance[]
): CardInstance[] {
    return shuffle([
        ...playerOneRemaining,
        ...playerTwoRemaining,
    ]);
}