import { EngineContext } from "../EngineContext";

import { processCommand } from "./processCommand";
import { processEvent } from "../events/processEvent";


export function processCommandQueue(
    context: EngineContext,
): number {

    let processed = 0;


    while (
        context.commandQueue.length > 0
    ) {

        const command =
            context.commandQueue.shift();


        if (!command) {
            continue;
        }


        processCommand(
            context,
            command,
        );


        processed++;


        while (
            context.eventQueue.length > 0
        ) {

            const event =
                context.eventQueue.shift();


            if (!event) {
                continue;
            }


            processEvent(
                context,
                event,
            );

        }

    }


    return processed;

}