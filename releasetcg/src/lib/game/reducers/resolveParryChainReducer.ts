import { EngineContext } from "../EngineContext";

import {
    ResolveParryChainCommand,
} from "../commands";

import {
    createBeginPhaseCommand,
} from "../commands";

import {
    TurnPhase,
} from "../models";

import {
    queueAttacks,
} from "./helpers";

export function resolveParryChainReducer(
    context: EngineContext,
    _command: ResolveParryChainCommand,
): void {

    const parry = context.state.parry;

    if (!parry) {
        return;
    }

    context.state.parry = null;

    //
    // Odd chain: the defender parried last, so the Play is stopped.
    // No effects, no damage — but every card played (the original
    // Play and every parry) stays on the gate exactly where it landed.
    //

    const negated = parry.chain.length % 2 === 1;

    if (negated) {

        context.pendingResolutions =
            context.pendingResolutions.filter(
                resolution =>
                    !parry.playCardIds.includes(resolution.card.id),
            );

        context.commandQueue.push(
            createBeginPhaseCommand(TurnPhase.Fill),
        );

        return;

    }

    //
    // Even chain (including no parries): the Play goes through.
    // resolveAttackReducer reads the gate's current top cards, so the
    // Attack Pattern is checked after the parry chain resolves.
    //

    queueAttacks(
        context,
        parry.gates,
    );

}