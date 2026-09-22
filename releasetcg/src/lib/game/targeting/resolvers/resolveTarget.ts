import { EngineContext } from "@/lib/game/EngineContext";

import {

    Target,

    TargetType,

} from "../models";

import { resolvePlayerTarget } from "./resolvePlayerTarget";

import { resolveCardTarget } from "./resolveCardTarget";

import { resolveGateTarget } from "./resolveGateTarget";

import { resolvePileTarget } from "./resolvePileTarget";

export function resolveTarget(

    context: EngineContext,

    target: Target,

) {

    switch (target.type) {

        case TargetType.Player:

            return resolvePlayerTarget(

                context,

                target,

            );

        case TargetType.Card:

            return resolveCardTarget(

                context,

                target,

            );

        case TargetType.Gate:

            return resolveGateTarget(

                context,

                target,

            );

        case TargetType.Pile:

            return resolvePileTarget(

                context,

                target,

            );

    }

}