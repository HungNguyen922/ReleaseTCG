import { Target } from "../models";

import { TargetSelection } from "./TargetSelection";

export function createTargetSelection<T extends Target>(
    requestId: string,
    target: T,
): TargetSelection<T> {

    return {

        requestId,

        target,

    };

}