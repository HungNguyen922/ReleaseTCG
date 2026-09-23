import { PendingTargetSelection } from "./PendingTargetSelection";
import { PendingCardSelection } from "./PendingCardSelection";
import { PendingCardOrdering } from "./PendingCardOrdering";
import { PendingBooleanChoice } from "./PendingBooleanChoice";

export type PendingInteraction =
    | PendingTargetSelection
    | PendingCardSelection
    | PendingCardOrdering
    | PendingBooleanChoice;