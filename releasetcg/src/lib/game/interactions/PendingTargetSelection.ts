import {
    Target,
} from "../targeting/models/Target";

import {
    TargetRequest,
} from "../targeting/requests";

import {
    BasePendingInteraction,
} from "./BasePendingInteraction";
import { PendingInteractionType } from "./PendingInteractionType";

export interface PendingTargetSelection<
    T extends Target = Target,
> extends BasePendingInteraction {

    type:
        PendingInteractionType.TargetSelection;

    request: TargetRequest<T>;

    resolve(
        target: T,
    ): void;

}