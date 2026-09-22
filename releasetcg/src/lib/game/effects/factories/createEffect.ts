import {
    Effect,
} from "../models/Effect";

export function createEffect<T extends Effect>(
    effect: T,
): T {

    return effect;

}