import {
    EngineContext,
} from "@/lib/game";

import {
    PileReference,
    CardReference,
} from "@/lib/game/refs";

import {
    createMoveCardCommand,
} from "@/lib/game/commands";

import {
    findTopCard,
} from "@/lib/game/queries/piles";

import {
    createHandReference,
} from "@/lib/game/refs";

export function queueDrawCommands(

    context: EngineContext,

    playerId: string,

    pile: PileReference,

    amount: number,

): void {

    for (

        let i = 0;

        i < amount;

        i++

    ) {

        const card =

            findTopCard(

                context,

                pile,

            );

        if (

            !card

        ) {

            break;

        }

        context.commandQueue.push(

            createMoveCardCommand(

                {

                    id: card.id,

                } satisfies CardReference,

                createHandReference(

                    playerId,

                ),

            ),

        );

    }

}