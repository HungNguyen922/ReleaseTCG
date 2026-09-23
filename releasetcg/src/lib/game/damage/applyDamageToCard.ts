import {
    EngineContext,
} from "@/lib/game/EngineContext";

import {
    CardReference,
} from "@/lib/game/refs";

import {
    DamageResult,
} from "./DamageResult";

export function applyDamageToCard(

    context: EngineContext,

    target: CardReference,

    amount: number,

): DamageResult {

    throw new Error(

        "Card damage not implemented.",

    );

}