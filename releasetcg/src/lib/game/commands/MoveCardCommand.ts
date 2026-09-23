import { CardReference, LocationReference } from "@/lib/game/refs";

import { BaseCommand } from "./BaseCommand";
import { CommandType } from "./CommandType";

export interface MoveCardCommand extends BaseCommand {
    type: CommandType.MoveCard;

    card: CardReference;

    destination: LocationReference;
}

export function createMoveCardCommand(
    card: CardReference,
    destination: LocationReference,
): MoveCardCommand {
    return {
        type: CommandType.MoveCard,
        card,
        destination,
    };
}