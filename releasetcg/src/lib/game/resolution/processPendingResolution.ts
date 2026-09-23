import { EngineContext } from "@/lib/game/EngineContext";

import {
    findCard,
} from "@/lib/game/queries";

import {
    findCardDefinition,
} from "@/lib/game/queries/lookup";

import {
    AbilityContext,
    AbilityTriggerType,
    processAbility,
} from "@/lib/game/abilities";

import {
    PendingResolution,
} from "./PendingResolution";

import {
    findTriggeredAbilities,
} from "../abilities/queries/findTriggeredAbilities";

export function processPendingResolution(
    context: EngineContext,
    resolution: PendingResolution,
): void {

    const cardLocation = findCard(
        context,
        resolution.card,
    );

    if (!cardLocation) {

        throw new Error(
            "Pending resolution card not found.",
        );

    }

    const definition = findCardDefinition(
        context,
        cardLocation.card,
    );

    const abilityContext: AbilityContext = {

        game: context,

        source: cardLocation.card,

    };

    const abilities = findTriggeredAbilities(

        definition.abilities,

        AbilityTriggerType.Play,

    );

    for (const ability of abilities) {

        processAbility(

            abilityContext,

            ability,

        );

    }

}