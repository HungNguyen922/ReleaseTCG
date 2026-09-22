import {
    registerEventListener,
} from "./EventListenerRegistry";

import {
    cardPlayedEventListener,
    fillPhaseEventListener,
    koEventListener
} from "./";


export function registerDefaultEventListeners() {

    // REGISTERING PLAYS
    registerEventListener(
        cardPlayedEventListener,
    );

    // REGISTERING PHASES
    registerEventListener(
        fillPhaseEventListener,
    );

    // REGISTERING WINCONS
    registerEventListener(
        koEventListener,
    );

}