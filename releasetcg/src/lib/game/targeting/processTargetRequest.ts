import {
    EngineContext,
} from "@/lib/game/EngineContext";

import {
    enqueuePendingInteraction,
} from "../interactions/enqueuePendingInteraction";

import {
    createPendingTargetSelection,
} from "../interactions/factories";

import {
    Target,
} from "./models";

import {
    TargetRequest,
} from "./requests/TargetRequest";

export function processTargetRequest<
    T extends Target,
>(
    context: EngineContext,

    request: TargetRequest<T>,

    resolve: (
        target: T,
    ) => void,

): void {

    //
    // No legal targets.
    //

    if (

        request.targets.length === 0

    ) {

        return;

    }

    //
    // Only one legal target.
    // Resolve immediately.
    //

    if (

        request.targets.length === 1

    ) {

        resolve(

            request.targets[0],

        );

        return;

    }

    //
    // Player must choose.
    //

    enqueuePendingInteraction(

        context,

        createPendingTargetSelection(

            request,

            resolve,

        ),

    );

}