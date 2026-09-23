import { CardInstance } from ".";

export interface CreateGameOptions {
    gameId: string;

    firstPlayerId: string;

    players: [
        {
            id: string;
            leader: CardInstance;
            mainDeck: CardInstance[];
            extraDeck: CardInstance[];
        },
        {
            id: string;
            leader: CardInstance;
            mainDeck: CardInstance[];
            extraDeck: CardInstance[];
        }
    ];
}