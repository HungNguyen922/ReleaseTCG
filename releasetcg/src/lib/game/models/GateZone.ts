import { BoardPosition } from "./BoardPosition";
import { PlayerSide } from "./PlayerSide";
import { GateStack } from "./GateStack";

export interface GateZone {
    side: PlayerSide;

    position: BoardPosition;

    stack: GateStack | null;
}