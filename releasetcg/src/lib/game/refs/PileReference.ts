import {
    LocationType,
    PileType,
} from "../models";

import { GameReference } from "./GameReference";

export interface PileReference extends GameReference {

    locationType: LocationType.Pile;

    /**
     * Hand, Main Deck, Temporary, etc.
     */
    pileType: PileType;

    playerId?: string;

    pileId?: string;
}

export function createMainDeckReference(
    playerId: string,
): PileReference {
    return {
        locationType: LocationType.Pile,
        pileType: PileType.MainDeck,
        playerId,
    };
}

export function createExtraDeckReference(
    playerId: string,
): PileReference {
    return {
        locationType: LocationType.Pile,
        pileType: PileType.ExtraDeck,
        playerId,
    };
}

export function createPublicPileReference(): PileReference {
    return {
        locationType: LocationType.Pile,
        pileType: PileType.PublicPile,
    };
}

export function createHandReference(
    playerId: string,
): PileReference {
    return {
        locationType: LocationType.Pile,
        pileType: PileType.Hand,
        playerId,
    };
}

export function createGapReference(): PileReference {
    return {
        locationType: LocationType.Pile,
        pileType: PileType.Gap,
    };
}

export function createTemporaryPileReference(
    pileId: string,
): PileReference {
    return {
        locationType: LocationType.Pile,
        pileType: PileType.Temporary,
        pileId,
    };
}