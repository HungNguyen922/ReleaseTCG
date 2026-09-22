import {
    BoardPosition,
    PlayerSide,
} from "@/lib/game/models";

import {
    GateReference,
} from "@/lib/game/refs";

function sideIndex(
    side: PlayerSide,
): number {

    switch (side) {

        case PlayerSide.Top:
            return 0;

        case PlayerSide.Bottom:
            return 1;

    }

}

function positionIndex(
    position: BoardPosition,
): number {

    switch (position) {

        case BoardPosition.Left:
            return 0;

        case BoardPosition.Center:
            return 1;

        case BoardPosition.Right:
            return 2;

    }

}

export function areAdjacent(
    a: GateReference,
    b: GateReference,
): boolean {

    const dx = Math.abs(
        positionIndex(a.position) -
        positionIndex(b.position),
    );

    const dy = Math.abs(
        sideIndex(a.side) -
        sideIndex(b.side),
    );

    return (

        dx <= 1 &&
        dy <= 1 &&
        (dx !== 0 || dy !== 0)

    );

}