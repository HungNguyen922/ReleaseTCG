import {
    AlwaysModifier,
} from "./AlwaysModifier";

import {
    OptionalModifier,
} from "./OptionalModifier";

export type EffectModifier =

    | AlwaysModifier
    | OptionalModifier;