import {
    Ability,
} from "./Ability";

export type AbilityRegistry =
    Record<
        string,
        Ability[]
    >;