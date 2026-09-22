import {
    CardInstance,
} from "../models";

import {
    CardReference,
    LocationReference,
} from "../refs";

export interface CardLocation {
    card: CardInstance;

    reference: CardReference;

    location: LocationReference;

    position: number;
}