import {
    EngineContext,
} from "@/lib/game";

import {
    DrawRequest,
    DrawResponse,
} from "./models";

import {
    validateDrawResponse,
} from "./validation/validateDrawResponse";

import {
    queueDrawCommands,
} from "./reducers/queueDrawCommands";

export function processDrawRequest(

    context: EngineContext,

    playerId: string,

    request: DrawRequest,

    response: DrawResponse,

): void {

    validateDrawResponse(

        request,

        response,

    );

    queueDrawCommands(

        context,

        playerId,

        response.pile,

        request.amount,

    );

}