import { GameAction } from "../../actions";
import { RuleResult } from "../RuleResult";

export function success(
    ...actions: GameAction[]
): RuleResult {

    return {
        success: true,
        actions,
        errors: [],
    };

}