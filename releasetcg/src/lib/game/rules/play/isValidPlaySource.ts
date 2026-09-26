import { EngineContext } from "@/lib/game/EngineContext";
import { LocationReference } from "@/lib/game/refs";
import { LocationType, PileType, PlayerSide } from "@/lib/game/models";

function sideForPlayer(context: EngineContext, playerId: string): PlayerSide {
    const index = context.state.players.findIndex(p => p.id === playerId);
    return index === 0 ? PlayerSide.Bottom : PlayerSide.Top;
}

export function isValidPlaySource(
    context: EngineContext,
    location: LocationReference,
    playerId: string,
): boolean {

    if (
        location.locationType === LocationType.Pile &&
        location.pileType === PileType.Hand &&
        location.playerId === playerId
    ) {
        return true;
    }

    if (
        location.locationType === LocationType.Set &&
        location.side === sideForPlayer(context, playerId)
    ) {
        return true;
    }

    return false;

}