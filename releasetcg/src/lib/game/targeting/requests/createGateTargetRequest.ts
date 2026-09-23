import {
    GateTarget, TargetContext,
} from "../models";

import {
    generateGateTargets,
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

export function createGateTargetRequest(

    targetContext: TargetContext,

): TargetRequest<GateTarget> {

    return createTargetRequest(

        TargetRequestType.Gate,

        generateGateTargets(
            targetContext,
        ),

    );

}