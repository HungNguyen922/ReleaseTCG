import { BoardPosition } from "../models";
import { PlayerSide } from "../models";
import { GameReference } from "./GameReference";

export interface BoardReference extends GameReference {
    side: PlayerSide;

    position: BoardPosition;
}