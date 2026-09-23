import {
    DrawRequest,
    DrawResponse,
} from "../models";

export function validateDrawResponse(

    request: DrawRequest,

    response: DrawResponse,

): void {

    const valid =

        request.availablePiles.some(

            pile =>

                JSON.stringify(

                    pile,

                ) ===

                JSON.stringify(

                    response.pile,

                ),

        );

    if (

        !valid

    ) {

        throw new Error(

            "Selected draw pile is not available.",

        );

    }

}