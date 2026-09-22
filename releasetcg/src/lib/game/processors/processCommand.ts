import { EngineContext } from "../EngineContext";

import { GameCommand, CommandType } from "../commands";

import {
    moveCardReducer,
    createGateReducer,
    startPriorityReducer,
    moveGateReducer,
    passReducer,
    endPriorityReducer,
    beginAttackReducer,
    resolveAttackReducer,
    beginPhaseReducer,
    drawCardsReducer,
    enforceMaxHandReducer,
    endTurnReducer,
    damagePlayerReducer,
} from "../reducers";

export function processCommand(
    context: EngineContext,
    command: GameCommand,
): void {

    switch (command.type) {

        case CommandType.MoveCard:
            moveCardReducer(context, command);
            return;

        case CommandType.StartPriority:
            startPriorityReducer(context, command);
            return;

        case CommandType.CreateGate:
            createGateReducer(context, command);
            return;

        case CommandType.MoveGate:
            moveGateReducer(context, command);
            return;

        case CommandType.Pass:
            passReducer(context, command);
            return;

        case CommandType.EndPriority:
            endPriorityReducer(context, command);
            return;

        case CommandType.BeginAttack:
            beginAttackReducer(context, command);
            return;

        case CommandType.ResolveAttack:
            resolveAttackReducer(context, command);
            return;

        case CommandType.BeginPhase:
            beginPhaseReducer(context, command);
            return;

        case CommandType.DrawCards:
            drawCardsReducer(context, command);
            return;

        case CommandType.EnforceMaxHand:
            enforceMaxHandReducer(context, command);
            return;

        case CommandType.EndTurn:
            endTurnReducer(context, command);
            return;

        case CommandType.DamagePlayer:
            damagePlayerReducer(context, command);
            return;

        default:
            throw new Error(
                `Unhandled command: ${command.type}`,
            );

    }

}