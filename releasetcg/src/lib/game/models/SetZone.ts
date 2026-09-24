import { BoardPosition } from "./BoardPosition";
import { PlayerSide } from "./PlayerSide";
import { GateStack } from "./GateStack";

export interface SetZone {
    side: PlayerSide;
    position: BoardPosition;
    stack: GateStack | null;
}