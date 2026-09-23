import { BurnAction } from "./BurnAction";
import { ConstructAction } from "./ConstructAction";
import { ChainAction } from "./ChainAction";
import { BoundAction } from "./BoundAction";
import { SplitAction } from "./SplitAction";
import { LiminalAction } from "./LiminalAction";
import { SetAction } from "./SetAction";

import { DealDamageAction } from "./DealDamageAction";
import { DrawCardsAction } from "./DrawCardsAction";
import { EndPriorityAction } from "./EndPriorityAction";
import { HealPlayerAction } from "./HealPlayerAction";
import { PassAction } from "./PassAction";
import { ResolveEffectsAction } from "./ResolveEffectsAction";
import { ResolveAttackAction } from "./ResolveAttackAction";
import { RevealCardsAction } from "./RevealCardsAction";
import { ShufflePileAction } from "./ShufflePileAction";


export type GameAction =
    | BurnAction
    | ConstructAction
    | ChainAction
    | BoundAction
    | SplitAction
    | LiminalAction
    | SetAction
    | PassAction
    | EndPriorityAction
    | ResolveEffectsAction
    | ResolveAttackAction
    | DealDamageAction
    | HealPlayerAction
    | DrawCardsAction
    | RevealCardsAction
    | ShufflePileAction