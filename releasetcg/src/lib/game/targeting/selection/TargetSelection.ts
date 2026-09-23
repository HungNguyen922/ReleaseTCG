import { Target } from "../models";

export interface TargetSelection<T extends Target = Target> {

    requestId: string;

    target: T;

}