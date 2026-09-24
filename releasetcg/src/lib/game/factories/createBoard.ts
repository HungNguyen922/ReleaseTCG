import {
    BoardPosition,
    BoardState,
    PlayerSide,
} from "../models";

function createZones() {
    return [
        PlayerSide.Top,
        PlayerSide.Bottom,
    ].flatMap((side) =>
        [
            BoardPosition.Left,
            BoardPosition.Center,
            BoardPosition.Right,
        ].map((position) => ({
            side,
            position,
            stack: null,
        }))
    );
}

export function createBoard(): BoardState {
    return {
        gateZones: createZones(),
        setZones: createZones(),
    };
}