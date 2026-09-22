import {
    PendingBooleanChoice,
} from "..";

import {
    PendingInteractionType,
} from "..";

import {
    BooleanChoiceRequest,
} from "..";

export function createPendingBooleanChoice(

    request: BooleanChoiceRequest,

    resolve: (
        accepted: boolean,
    ) => void,

): PendingBooleanChoice {

    return {

        type:
            PendingInteractionType.BooleanChoice,

        request,

        resolve,

    };

}