import {
    EngineContext,
} from "@/lib/game/EngineContext";

export function getNextPlayer(

    context: EngineContext,

    currentPlayerId: string,

): string {

    const players =

        context.state.players;

    const index =

        players.findIndex(

            player =>

                player.id === currentPlayerId,

        );

    if (

        index === -1

    ) {

        throw new Error(

            `Unknown player "${currentPlayerId}".`,

        );

    }

    return players[

        (index + 1) % players.length

    ].id;

}