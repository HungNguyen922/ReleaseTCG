import { GameReference } from "./GameReference";
import { GateReference } from "./GateReference";

export interface StackReference extends GameReference {
    gate: GateReference;
}