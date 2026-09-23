import { BeginAttackCommand } from "./BeginAttackCommand";
import { BeginPhaseCommand } from "./BeginPhaseCommand";
import { CreateGateCommand } from "./CreateGateCommand";
import { DamagePlayerCommand } from "./DamagePlayerCommand";
import { DestroyGateCommand } from "./DestroyGateCommand";
import { DrawCardsCommand } from "./DrawCardsCommand";
import { EndPriorityCommand } from "./EndPriorityCommand";
import { EndTurnCommand } from "./EndTurnCommand";
import { HealPlayerCommand } from "./HealPlayerCommand";
import { MoveCardCommand } from "./MoveCardCommand";
import { MoveGateCommand } from "./MoveGateCommand";
import { ResolveAttackCommand } from "./ResolveAttackCommand";
import { RevealCardsCommand } from "./RevealCardsCommand";
import { StartPriorityCommand } from "./StartPriorityCommand";

export type EngineCommand =
    | BeginAttackCommand
    | BeginPhaseCommand
    | CreateGateCommand
    | DamagePlayerCommand
    | DestroyGateCommand
    | DrawCardsCommand
    | EndPriorityCommand
    | EndTurnCommand
    | HealPlayerCommand
    | MoveCardCommand
    | MoveGateCommand
    | ResolveAttackCommand
    | RevealCardsCommand
    | StartPriorityCommand;