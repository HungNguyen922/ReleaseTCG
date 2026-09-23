import { ActionType } from "./ActionType";

export interface EndPriorityAction {
    type: ActionType.EndPriority;
}

export function createEndPriorityAction(): EndPriorityAction {
    return {
        type: ActionType.EndPriority,
    };
}