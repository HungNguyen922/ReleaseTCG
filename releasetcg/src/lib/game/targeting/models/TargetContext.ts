import {
    EngineContext,
} from "@/lib/game/EngineContext";

import { CardReference } from "@/lib/game/refs";

import { Ability } from "@/lib/game/abilities";

import { Effect } from "@/lib/game/effects";

export interface TargetContext {

    engine: EngineContext;

    sourcePlayerId: string;

    sourceCard?: CardReference;

    sourceAbility?: Ability;

    sourceEffect?: Effect;

}