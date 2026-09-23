import {
    CardInstance,
} from "@/lib/game/models";

interface Options {

    id?: string;

    cardId: string;

    ownerId: string;

    controllerId?: string;

}

let nextInstance = 1;

export function createTestCardInstance({

    id,

    cardId,

    ownerId,

    controllerId = ownerId,

}: Options): CardInstance {

    return {

        id:
            id ??
            `TEST_INSTANCE_${nextInstance++}`,

        cardId,

        ownerId,

        controllerId,

    };

}