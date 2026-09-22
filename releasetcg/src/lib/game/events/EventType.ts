export enum EventType {
    CardMoved = "cardMoved",
    CardsDrawn = "cardsDrawn",
    CardsRevealed = "cardsRevealed",

    GateCreated = "gateCreated",
    GateDestroyed = "gateDestroyed",
    GateMoved = "gateMoved",

    PlayerDamaged = "playerDamaged",
    PlayerHealed = "playerHealed",

    AttackStarted = "attackStarted",
    AttackResolved = "attackResolved",

    PriorityStarted = "priorityStarted",
    PriorityEnded = "priorityEnded",
    
    PhaseStarted = "phaseStarted",
    PlayerPassed = "playerPassed",
    TurnEnded = "turnEnded",
    GameEnded = 'gameEnded',

}