import {
    BoardPosition,
    BoardState,
    PlayerSide,
} from "../models";

export function createBoard(): BoardState {
    const gateZones = [
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

    const setZones = [
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
            card: null,
        }))
    );

    return {
        gateZones,
        setZones,
    };
}