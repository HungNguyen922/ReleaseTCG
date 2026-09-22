import {
    createTargetRequest,
} from "./createTargetRequest";

import {
    TargetRequest,
} from "./TargetRequest";

import {
    PlayerTarget, TargetContext,
} from "../models";

import {
    TargetRequestType,
} from "./TargetRequestType";

import {
    generateDamageTargets,
} from "../generators";

export function createDamageTargetRequest(

    targetContext: TargetContext,

): TargetRequest<PlayerTarget> {

    return createTargetRequest(

        TargetRequestType.Damage,

        generateDamageTargets(
            targetContext,
        ),

    );

}