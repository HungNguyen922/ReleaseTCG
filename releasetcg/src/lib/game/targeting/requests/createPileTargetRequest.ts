import {
    EngineContext,
} from "@/lib/game/EngineContext";

import {
    PileTarget,
} from "../models";

import {
    generatePileTargets,
} from "../generators";

import {
    createTargetRequest,
} from "./createTargetRequest";

import {
    TargetRequest,
} from "./TargetRequest";

import {
    TargetRequestType,
} from "./TargetRequestType";

export function createPileTargetRequest(

    context: EngineContext,

): TargetRequest<PileTarget> {

    return createTargetRequest(

        TargetRequestType.Pile,

        generatePileTargets(
            context,
        ),

    );

}