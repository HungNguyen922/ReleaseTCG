import {
    PlayerTarget,
    TargetType,
} from "../models";

import {
    TargetContext,
} from "../models";

export function generateDamageTargets(
    targetContext: TargetContext,
): PlayerTarget[] {

    return targetContext.engine.state.players

        .filter(

            player =>

                player.id !==
                targetContext.sourcePlayerId,

        )

        .map(

            player => ({

                type: TargetType.Player,

                reference: {

                    id: player.id,

                },

            }),

        );

}