import {
    LocationType,
} from "@/lib/game/models";

import {
    GateTarget,
    TargetContext,
    TargetType,
} from "../models";

export function generateGateTargets(
    targetContext: TargetContext,
): GateTarget[] {

    return targetContext.engine.state.board.gateZones.map(

        gate => ({

            type: TargetType.Gate,

            reference: {

                locationType: LocationType.Gate,

                side: gate.side,

                position: gate.position,

            },

        }),

    );

}