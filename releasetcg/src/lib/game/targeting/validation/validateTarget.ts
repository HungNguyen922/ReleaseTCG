import {
    EngineContext,
} from "@/lib/game/EngineContext";

import {
    Target,
    TargetType,
} from "../models";

import {
    validateCardTarget,
} from "./validateCardTarget";

import {
    validateGateTarget,
} from "./validateGateTarget";

import {
    validatePileTarget,
} from "./validatePileTarget";

import {
    validatePlayerTarget,
} from "./validatePlayerTarget";

export function validateTarget(
    context: EngineContext,
    target: Target,
): boolean {

    switch (target.type) {

        case TargetType.Player:

            return validatePlayerTarget(
                context,
                target,
            );

        case TargetType.Card:

            return validateCardTarget(
                context,
                target,
            );

        case TargetType.Gate:

            return validateGateTarget(
                context,
                target,
            );

        case TargetType.Pile:

            return validatePileTarget(
                context,
                target,
            );

    }

}