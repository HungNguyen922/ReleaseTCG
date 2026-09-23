import { GateReference } from "./GateReference";
import { PileReference } from "./PileReference";
import { SetZoneReference } from "./SetZoneReference";

export type LocationReference =
    | GateReference
    | SetZoneReference
    | PileReference;