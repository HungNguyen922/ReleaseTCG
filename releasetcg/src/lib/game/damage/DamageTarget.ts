import { PlayerTarget, CardTarget } from "@/lib/game/targeting/models";

export type DamageTarget =
    | PlayerTarget
    | CardTarget;