import {
    BasePendingInteraction,
} from "./BasePendingInteraction";

import {
    PendingInteractionType,
} from "./PendingInteractionType";

import {
    BooleanChoiceRequest,
} from ".";

export interface PendingBooleanChoice
    extends BasePendingInteraction {

    type:
        PendingInteractionType.BooleanChoice;

    request:
        BooleanChoiceRequest;

    resolve(
        accepted: boolean,
    ): void;

}