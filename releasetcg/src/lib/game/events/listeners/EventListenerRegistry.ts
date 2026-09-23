import {
    EventListener,
} from "./EventListener";

const listeners: EventListener[] = [];

export function registerEventListener(
    listener: EventListener,
): void {

    listeners.push(listener);

}

export function getEventListeners(): EventListener[] {

    return listeners;

}

export function clearEventListeners(): void {

    listeners.length = 0;

}