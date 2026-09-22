import {
    CardTarget, TargetContext
} from "../models";

import {
    generateCardTargets,
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

export function createCardTargetRequest(

    targetContext: TargetContext,

): TargetRequest<CardTarget> {

    return createTargetRequest(

        TargetRequestType.Card,

        generateCardTargets(
            targetContext,
        ),

    );

}