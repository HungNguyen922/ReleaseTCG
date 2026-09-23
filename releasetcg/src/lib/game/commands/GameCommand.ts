import { BeginAttackCommand } from "./BeginAttackCommand";
import { BeginPhaseCommand } from "./BeginPhaseCommand";
import { CreateGateCommand } from "./CreateGateCommand";
import { CreatePileCommand } from "./CreatePileCommand";
import { DamagePlayerCommand } from "./DamagePlayerCommand";
import { DestroyGateCommand } from "./DestroyGateCommand";
import { DestroyPileCommand } from "./DestroyPileCommand";
import { DrawCardsCommand } from "./DrawCardsCommand";
import { EndPriorityCommand } from "./EndPriorityCommand";
import { EndTurnCommand } from "./EndTurnCommand";
import { HealPlayerCommand } from "./HealPlayerCommand";
import { MoveCardCommand } from "./MoveCardCommand";
import { MoveGateCommand } from "./MoveGateCommand";
import { ResolveAttackCommand } from "./ResolveAttackCommand";
import { RevealCardsCommand } from "./RevealCardsCommand";
import { ShufflePileCommand } from "./ShufflePileCommand";
import { StartPriorityCommand } from "./StartPriorityCommand";
import { PassCommand } from "./PassCommand";
import { EnforceMaxHandCommand } from "./EnforceMaxHandCommand";

export type GameCommand =
    | MoveCardCommand
    | MoveGateCommand
    | PassCommand
    | CreateGateCommand
    | DestroyGateCommand
    | CreatePileCommand
    | DestroyPileCommand
    | ShufflePileCommand
    | DamagePlayerCommand
    | HealPlayerCommand
    | DrawCardsCommand
    | RevealCardsCommand
    | ShufflePileCommand
    | BeginAttackCommand
    | ResolveAttackCommand
    | StartPriorityCommand
    | EndPriorityCommand
    | BeginPhaseCommand
    | EndTurnCommand
    | EnforceMaxHandCommand;