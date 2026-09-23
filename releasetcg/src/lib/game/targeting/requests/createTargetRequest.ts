import {
    Target,
} from "../models";

import {
    TargetRequest,
} from "./TargetRequest";

import {
    TargetRequestType,
} from "./TargetRequestType";

let nextRequestId = 1;

export function createTargetRequest<
    T extends Target,
>(

    type: TargetRequestType,

    targets: T[],

    minimumSelections = 1,

    maximumSelections = 1,

): TargetRequest<T> {

    return {

        id: `TARGET_REQUEST_${nextRequestId++}`,

        type,

        targets,

        minimumSelections,

        maximumSelections,

    };

}