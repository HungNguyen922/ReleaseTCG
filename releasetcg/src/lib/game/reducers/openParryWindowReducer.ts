import { EngineContext } from "../EngineContext";

import {
    OpenParryWindowCommand,
} from "../commands";

import {
    createResolveParryChainCommand,
} from "../commands";

import {
    getPlayBulk,
    hasParryOptions,
} from "../queries/";

import {
    queueAttacks,
} from "./helpers";

export function openParryWindowReducer(
    context: EngineContext,
    command: OpenParryWindowCommand,
): void {

    const attackerId = command.attacker.id;

    const defender = context.state.players.find(
        player => player.id !== attackerId,
    );

    const bulk = getPlayBulk(
        context,
        command.gates,
    );

    //
    // Nothing to parry against: let the play through.
    //

    if (!defender || bulk === null) {

        queueAttacks(
            context,
            command.gates,
        );

        return;

    }

    context.state.parry = {
        attackerId,
        defenderId: defender.id,
        gates: command.gates,
        playCardIds: command.cards.map(card => card.id),
        chain: [],
        responderId: defender.id,
        requiredBulk: bulk,
    };

    //
    // Auto-skip the window when the defender has no matching card.
    //

    if (!hasParryOptions(context, defender.id)) {

        context.commandQueue.push(
            createResolveParryChainCommand(),
        );

    }

}