import {
    EngineContext,
} from "@/lib/game/EngineContext";

export function checkKnockout(

    context: EngineContext,

): string | null {

    const defeatedPlayers =

        context.state.players.filter(

            player =>

                player.health <= 0,

        );

    if (

        defeatedPlayers.length === 0

    ) {

        return null;

    }

    if (

        defeatedPlayers.length > 1

    ) {

        //
        // Future:
        // simultaneous loss handling.
        //

        return null;

    }

    const defeatedPlayer =

        defeatedPlayers[0];

    const winner =

        context.state.players.find(

            player =>

                player.id !== defeatedPlayer.id,

        );

    return winner?.id ?? null;

}