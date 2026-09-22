import {
    Target,
    TargetType,
} from "@/lib/game/targeting/models";

export function canTakeDamage(
    target: Target,
): boolean {

    switch (target.type) {

        case TargetType.Player:
            return true;

        case TargetType.Card:
            return true;

        default:
            return false;

    }

}