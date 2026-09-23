import { RuleResult } from "../RuleResult";

export function failure(
    ...errors: string[]
): RuleResult {

    return {
        success: false,
        actions: [],
        errors,
    };

}