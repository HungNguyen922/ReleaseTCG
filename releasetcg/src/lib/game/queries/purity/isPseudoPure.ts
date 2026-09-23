import { CardInstance } from "../../models";
import { EngineContext } from "../../EngineContext";

import { cardsShareColorSet } from "./cardsShareColorSet";

export function isPseudoPure(
    context: EngineContext,
    a: CardInstance,
    b: CardInstance,
): boolean {

    return cardsShareColorSet(
        context,
        a,
        b,
        2,
    );

}