import {
    PendingTargetSelection,
} from "../interactions/PendingTargetSelection";

import {
    Target,
} from "./models/Target";

export function resolvePendingTargetSelection<

    T extends Target,

>(

    selection: PendingTargetSelection<T>,

    target: T,

): void {

    selection.resolve(

        target,

    );

}