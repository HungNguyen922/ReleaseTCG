export enum CommandType {
    MoveCard = "moveCard",
    MoveGate = "moveGate",
    Pass = "pass",

    CreateGate = "createGate",
    DestroyGate = "destroyGate",

    CreatePile = "createPile",
    DestroyPile = "destroyPile",

    ShufflePile = "shufflePile",
    
    DamagePlayer = "damagePlayer",
    HealPlayer = "healPlayer",

    DrawCards = "drawCards",
    RevealCards = "revealCards",

    BeginAttack = "beginAttack",
    ResolveAttack = "resolveAttack",

    StartPriority = "startPriority",
    EndPriority = "endPriority",

    BeginPhase = "beginPhase",
    EndTurn = "endTurn",
    EnforceMaxHand = "enforceMaxHand",
}