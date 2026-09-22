import { LocationType } from "../models";
import { BoardReference } from "./BoardReference";

export interface SetZoneReference extends BoardReference {
    locationType: LocationType.Set;
}