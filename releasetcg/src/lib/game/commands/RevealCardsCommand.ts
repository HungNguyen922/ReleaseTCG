import {
    CardReference,
    PlayerReference,
} from "@/lib/game/refs";

import { BaseCommand } from "./BaseCommand";
import { CommandType } from "./CommandType";

export interface RevealCardsCommand extends BaseCommand {
    type: CommandType.RevealCards;

    cards: CardReference[];

    viewers: PlayerReference[];
}