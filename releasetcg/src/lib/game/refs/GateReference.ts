import { LocationType } from "../models";
import { BoardReference } from "./BoardReference";

export interface GateReference extends BoardReference {
    locationType: LocationType.Gate;
}   