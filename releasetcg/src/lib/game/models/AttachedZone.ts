import { BoardPosition } from "./BoardPosition";
import { PlayerSide } from "./PlayerSide";

export interface AttachedZone {
    side: PlayerSide;

    position: BoardPosition;
}