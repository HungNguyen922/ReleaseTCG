import {
    AbilityContext,
} from "@/lib/game/abilities";

import {
    Effect,
} from "../models/Effect";

import {
    EffectModifierType,
    getModifier,
} from "../modifiers";

import {
    OptionalModifier,
} from "../modifiers";

import {
    processEffect,
} from "./processEffect";

import {
    createBooleanChoiceRequest,
    processBooleanChoiceRequest,
} from "@/lib/game/interactions";

export function processEffectWithModifiers(

    context: AbilityContext,

    effect: Effect,

): void {

    //
    // Optional
    //

    const optional =

        getModifier<OptionalModifier>(

            effect.modifiers,

            EffectModifierType.Optional,

        );

    if (

        optional

    ) {

        const request =

            createBooleanChoiceRequest(

                effect.type,
                optional.message,

            );

        processBooleanChoiceRequest(

            context.game,

            request,

            accepted => {

                if (

                    accepted

                ) {

                    processEffect(

                        context,

                        effect,

                    );

                }

            },

        );

        return;

    }

    //
    // Default
    //

    processEffect(

        context,

        effect,

    );

}