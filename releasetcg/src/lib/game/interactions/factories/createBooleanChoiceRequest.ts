import {
    BooleanChoiceRequest,
} from "..";

export function createBooleanChoiceRequest(

    title: string,

    message: string,

    trueLabel = "Yes",

    falseLabel = "No",

): BooleanChoiceRequest {

    return {

        title,

        message,

        trueLabel,

        falseLabel,

    };

}