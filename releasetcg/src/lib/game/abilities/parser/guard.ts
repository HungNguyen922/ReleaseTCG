import {
    Ability,
} from "../Ability";

export function assertObject(
    value: unknown,
    message: string,
): asserts value is Record<string, unknown> {

    if (

        typeof value !== "object" ||

        value === null ||

        Array.isArray(value)

    ) {

        throw new Error(message);

    }

}

export function assertArray(
    value: unknown,
    message: string,
): asserts value is unknown[] {

    if (

        !Array.isArray(value)

    ) {

        throw new Error(message);

    }

}

export function assertString(
    value: unknown,
    message: string,
): asserts value is string {

    if (

        typeof value !== "string"

    ) {

        throw new Error(message);

    }

}

export function assertNumber(
    value: unknown,
    message: string,
): asserts value is number {

    if (

        typeof value !== "number"

    ) {

        throw new Error(message);

    }

}