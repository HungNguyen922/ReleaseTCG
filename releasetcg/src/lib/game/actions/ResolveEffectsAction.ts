import { ActionType } from "./ActionType";

export interface ResolveEffectsAction {
    type: ActionType.ResolveEffects;
}

export function createResolveEffectsAction(): ResolveEffectsAction {
    return {
        type: ActionType.ResolveEffects,
    };
}