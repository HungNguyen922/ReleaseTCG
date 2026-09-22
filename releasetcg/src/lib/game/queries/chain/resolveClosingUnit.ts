import { EngineContext } from "@/lib/game/EngineContext";

import { CardInstance } from "@/lib/game/models";

import { PureUnit } from "@/lib/game/queries/purity/findPureUnits";

export function resolveClosingUnit(

    context: EngineContext,

    cards: CardInstance[],

): PureUnit | null {

    //
    // Reserved for Bound.
    //

    return null;

}