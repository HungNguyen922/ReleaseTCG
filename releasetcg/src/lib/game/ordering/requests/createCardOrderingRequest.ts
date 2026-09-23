import {
    CardOrderingRequest,
} from "../models/CardOrderingRequest";

import {
    CardOrderingOptions,
} from "../models/CardOrderingOptions";

export function createCardOrderingRequest(

    title: string,

    message: string,

    options: CardOrderingOptions,

): CardOrderingRequest {

    return {

        title,

        message,

        options,

    };

}