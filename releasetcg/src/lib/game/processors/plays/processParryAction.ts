import { EngineContext } from "@/lib/game/EngineContext";

import { ActionType, ParryAction, DeclineParryAction } from "@/lib/game/actions";

import { createPlayParryCommand, createResolveParryChainCommand } from "@/lib/game/commands";

export function processParryAction(
    context: EngineContext,
    action: ParryAction | DeclineParryAction,
): void {
 
    if (action.type === ActionType.Parry) {
 
        context.commandQueue.push(
            createPlayParryCommand(
                action.player,
                action.card,
            ),
        );
 
        return;
 
    }
 
    context.commandQueue.push(
        createResolveParryChainCommand(),
    );
 
}
 
