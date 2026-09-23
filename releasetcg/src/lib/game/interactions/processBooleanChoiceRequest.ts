import {
    EngineContext,
} from "@/lib/game/EngineContext";

import {
    createPendingBooleanChoice,
} from ".";

import {
    enqueuePendingInteraction,
} from ".";

import {
    BooleanChoiceRequest,
} from "./BooleanChoiceRequest";

export function processBooleanChoiceRequest(

    context: EngineContext,

    request: BooleanChoiceRequest,

    resolve: (
        accepted: boolean,
    ) => void,

): void {

    enqueuePendingInteraction(

        context,

        createPendingBooleanChoice(

            request,

            resolve,

        ),

    );

}