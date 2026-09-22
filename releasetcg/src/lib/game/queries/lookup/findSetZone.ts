import { EngineContext } from "../../EngineContext";

import { SetZone } from "../../models";

import { SetZoneReference } from "../../refs";

export function findSetZone(
    context: EngineContext,
    reference: SetZoneReference,
): SetZone | null {

    return (

        context.state.board.setZones.find(

            setZone =>

                setZone.side === reference.side &&
                setZone.position === reference.position,

        ) ?? null

    );

}