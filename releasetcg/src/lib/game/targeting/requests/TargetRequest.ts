import {
    Target,
} from "../models";

import {
    TargetRequestType,
} from "./TargetRequestType";

export interface TargetRequest<
    T extends Target = Target,
> {

    id: string;

    type: TargetRequestType;

    targets: T[];

    minimumSelections: number;

    maximumSelections: number;

}