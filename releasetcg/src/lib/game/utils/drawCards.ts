export function drawCards<T>(
    deck: T[],
    count: number
) {
    return {
        hand: deck.slice(0, count),
        remainingDeck: deck.slice(count),
    };
}