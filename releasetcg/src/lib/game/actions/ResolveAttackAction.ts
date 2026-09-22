import { ActionType } from "./ActionType";
import { CardReference } from "../refs/CardReference";

export interface ResolveAttackAction {
    type: ActionType.ResolveAttack;

    attackingCard: CardReference;
}

export function createResolveAttackAction(
    attackingCard: CardReference,
): ResolveAttackAction {
    return {
        type: ActionType.ResolveAttack,
        attackingCard,
    };
}