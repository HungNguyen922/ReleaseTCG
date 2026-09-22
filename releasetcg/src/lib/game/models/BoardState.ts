import { GateZone } from "./GateZone";
import { SetZone } from "./SetZone";

export interface BoardState {
    gateZones: GateZone[];

    setZones: SetZone[];
}