import { EngineContext } from "../EngineContext";

import {
    PlayParryCommand,
} from "../commands";

import {
    createMoveCardCommand,
    createResolveParryChainCommand,
} from "../commands";

import {
    hasParryOptions,
} from "../queries";

export function playParryReducer(
    context: EngineContext,
    command: PlayParryCommand,
): void {

    const parry = context.state.parry;

    if (!parry) {

        throw new Error(
            "PlayParryReducer: no parry window is open.",
        );

    }

    if (parry.responderId !== command.player.id) {

        throw new Error(
            "PlayParryReducer: it is not this player's parry.",
        );

    }

    //
    // Parries land directly on the gate the Play landed on, on top
    // of whatever's already there. This is what lets the parry chain
    // reshape the gate's Attack Pattern (Pair/Straight) and change
    // what future Burns can land on it.
    //

    context.commandQueue.push(
        createMoveCardCommand(
            command.card,
            parry.gates[0],
        ),
    );

    parry.chain.push({
        playerId: command.player.id,
        cardId: command.card.id,
    });

    parry.responderId =
        command.player.id === parry.attackerId
            ? parry.defenderId
            : parry.attackerId;

    //
    // Auto-close when the other player can't answer.
    //

    if (!hasParryOptions(context, parry.responderId)) {

        context.commandQueue.push(
            createResolveParryChainCommand(),
        );

    }

}