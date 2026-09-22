import { CardInstance } from "../../models";
import { EngineContext } from "../../EngineContext";

export function isPure(
    context: EngineContext,
    card: CardInstance,
): boolean {

    const definition =
        context.cardDatabase[card.cardId];

    return definition.colors.length === 1;

}