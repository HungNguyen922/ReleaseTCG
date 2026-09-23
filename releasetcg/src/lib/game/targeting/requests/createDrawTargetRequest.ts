import {
    PileTarget, TargetContext,
} from "../models";

import {
    generateDrawTargets,
} from "../generators";

import {
    TargetRequest,
} from "./TargetRequest";

import {
    TargetRequestType,
} from "./TargetRequestType";

import {
    createTargetRequest,
} from "./createTargetRequest";

export function createDrawTargetRequest(

    targetContext: TargetContext,

): TargetRequest<PileTarget> {

    return createTargetRequest(

        TargetRequestType.Draw,

        generateDrawTargets(
            targetContext,
        ),

    );

}