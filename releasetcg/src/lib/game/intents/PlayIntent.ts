import { CardReference, LocationReference, PlayerReference } from "../refs";

import { PlayType } from "../models";

export interface PlayIntent {

    type: "play";

    player: PlayerReference;

    playType: PlayType;

    cards: CardReference[];

    destinations: LocationReference[];

}