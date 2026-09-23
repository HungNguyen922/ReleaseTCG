import { BoardPosition } from "./BoardPosition";
import { PileState } from "./PileState";
import { PlayerSide } from "./PlayerSide";

export interface SetZone {
    side: PlayerSide;
    position: BoardPosition;
    stack: PileState;
}