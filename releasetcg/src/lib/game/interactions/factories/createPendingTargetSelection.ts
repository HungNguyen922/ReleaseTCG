import {

    PendingTargetSelection,

} from "../PendingTargetSelection";

import {

    PendingInteractionType,

} from "../PendingInteractionType";

import {

    Target,

} from "../../targeting/models";

import {

    TargetRequest,

} from "../../targeting/requests";

export function createPendingTargetSelection<
    T extends Target,
>(
    request: TargetRequest<T>,

    resolve: (
        target: T,
    ) => void,

): PendingTargetSelection<T> {

    return {

        type:
            PendingInteractionType.TargetSelection,

        request,

        resolve,

    };

}