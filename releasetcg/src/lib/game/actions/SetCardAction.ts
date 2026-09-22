import { ActionType } from "./ActionType";
import { CardReference } from "../refs/CardReference";
import { PlayerReference } from "../refs/PlayerReference";
import { LocationReference } from "../refs/LocationReference";

export interface SetCardAction {
    type: ActionType.SetCard;

    player: PlayerReference;

    card: CardReference;

    destination: LocationReference;
}

export function createSetCardAction(
    player: PlayerReference,
    card: CardReference,
    destination: LocationReference,
): SetCardAction {
    return {
        type: ActionType.SetCard,
        player,
        card,
        destination,
    };
}