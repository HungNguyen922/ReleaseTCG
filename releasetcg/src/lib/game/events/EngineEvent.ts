import { AttackResolvedEvent } from "./gameplay/AttackResolvedEvent";
import { AttackStartedEvent } from "./gameplay/AttackStartedEvent";
import { CardsRevealedEvent } from "./state/CardsRevealedEvent";
import { PhaseStartedEvent } from "./gameplay/PhaseStartedEvent";
import { PriorityEndedEvent } from "./gameplay/PriorityEndedEvent";
import { PriorityStartedEvent } from "./gameplay/PriorityStartedEvent";
import { TurnEndedEvent } from "./gameplay/TurnEndedEvent";

import { CardsDrawnEvent } from "./state/CardsDrawnEvent";
import { CardMovedEvent } from "./state/CardMovedEvent";
import { GateCreatedEvent } from "./state/GateCreatedEvent";
import { GateDestroyedEvent } from "./state/GateDestroyedEvent";
import { GateMovedEvent } from "./state/GateMovedEvent";
import { PlayerDamagedEvent } from "./state/PlayerDamagedEvent";
import { PlayerHealedEvent } from "./state/PlayerHealedEvent";
import { PlayerPassedEvent } from "./state";
import { GameEndedEvent } from "./gameplay";

export type EngineEvent =
    | CardMovedEvent
    | CardsDrawnEvent
    | CardsRevealedEvent

    | GateCreatedEvent
    | GateDestroyedEvent
    | GateMovedEvent

    | PlayerDamagedEvent
    | PlayerHealedEvent

    | AttackResolvedEvent
    | AttackStartedEvent

    | PriorityStartedEvent
    | PriorityEndedEvent


    | PhaseStartedEvent
    | PlayerPassedEvent
    | TurnEndedEvent
    | GameEndedEvent;
    