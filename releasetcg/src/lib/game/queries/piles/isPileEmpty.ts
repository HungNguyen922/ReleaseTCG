import { EngineContext } from "@/lib/game/EngineContext";

import {
    PileReference,
} from "@/lib/game/refs";

import {
    findPile,
} from "../lookup";

import {
    countCards,
} from "./countCards";

export function isPileEmpty(
    context: EngineContext,
    reference: PileReference,
): boolean {

    return (

        countCards(

            context,

            reference,

        ) === 0

    );

}