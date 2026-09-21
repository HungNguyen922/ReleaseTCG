import { EngineContext } from "@/lib/game/EngineContext";

import {
    BoardPosition,
    CardInstance,
    TurnPhase,
    GameState,
    LocationType,
    PileState,
    PileType,
    PlayerSide,
    PlayerState,
    PlayType,
    PriorityState,
    TurnState,
    CardColor,
} from "@/lib/game/models";

import {
    createTestCardDefinition,
    TestCardDefinitionOptions,
} from "./factories/createTestCardDefinition";

import {
    createTestCardInstance,
} from "./factories/createTestCardInstance";

import { GateReference, LocationReference } from "@/lib/game/refs";
import { PlayIntent } from "@/lib/game/intents/PlayIntent";
import { compilePlayIntent } from "@/lib/game/rules/play/compilePlayIntent";

import { createEngineContext } from "@/lib/game";

import {
    processPendingResolution,
} from "@/lib/game/resolution";

import {
    processAction,
} from "@/lib/game/processors/processAction";

import {
    clearEventListeners,
} from "@/lib/game/events/listeners/EventListenerRegistry";

import {
    registerDefaultEventListeners,
} from "@/lib/game/events/listeners/registerDefaultEventListeners";

import { processEngine } from "@/lib/game/engine/processEngine";

import type {
    DeckExport,
    DeckEntry,
} from "@/types/decks";

import {
    TEST_CARD_DEFINITIONS,
} from "../cards/testCardDefinitions";

type GameListener = () => void;

export class TestGame {

    private readonly listeners = new Set<GameListener>();

    public readonly context: EngineContext;

    public readonly state: GameState;

    public readonly player1: PlayerState;

    public readonly player2: PlayerState;

    constructor(
        options: {
            player1Deck?: DeckExport;
            player2Deck?: DeckExport;
        } = {},
    ) {

        clearEventListeners();
        registerDefaultEventListeners();

        this.player1 = {
            id: "P1",
            health: 10,
        };

        this.player2 = {
            id: "P2",
            health: 10,
        };

        this.state = {

            id: "TEST_GAME",

            players: [
                this.player1,
                this.player2,
            ],

            board: {

                gateZones: [

                    {
                        side: PlayerSide.Top,
                        position: 0,
                        stack: null,
                    },

                    {
                        side: PlayerSide.Top,
                        position: 1,
                        stack: null,
                    },

                    {
                        side: PlayerSide.Top,
                        position: 2,
                        stack: null,
                    },

                    {
                        side: PlayerSide.Bottom,
                        position: 0,
                        stack: null,
                    },

                    {
                        side: PlayerSide.Bottom,
                        position: 1,
                        stack: null,
                    },

                    {
                        side: PlayerSide.Bottom,
                        position: 2,
                        stack: null,
                    },

                ],

                setZones: [],

            },

            piles: [

                this.createPile(
                    PileType.Hand,
                    "P1",
                ),

                this.createPile(
                    PileType.Hand,
                    "P2",
                ),

                this.createPile(
                    PileType.MainDeck,
                    "P1",
                ),

                this.createPile(
                    PileType.MainDeck,
                    "P2",
                ),

                this.createPile(
                    PileType.ExtraDeck,
                    "P1",
                ),

                this.createPile(
                    PileType.ExtraDeck,
                    "P2",
                ),

                this.createPile(
                    PileType.PublicPile,
                ),

                this.createPile(
                    PileType.Gap,
                ),

            ],

            turn: {

                turnNumber: 1,

                currentPlayerId: "P1",

                phase: TurnPhase.Action,

                actionTaken: false,

            } satisfies TurnState,

            priority: {

                currentPlayerId: "P1",

            } satisfies PriorityState,

            winnerId: null,

        };

        this.context =
            createEngineContext(
                this.state,
                {},
            );

        //
        // Now that context exists, we can
        // safely create test cards.
        //

        this.addGateCard({

            side: PlayerSide.Bottom,

            position: 1,

            ownerId: "P1",

            name: "Test Gate",

            power: 1,

            bulk: 1,

            colors: [
                CardColor.Red,
                CardColor.Blue,
            ],

        });

        //
        // Load real test decks if supplied.
        //

        this.registerTestCardDefinitions();

        if (options.player1Deck) {

            this.loadDeck(
                "P1",
                options.player1Deck,
            );

            //this.drawStartingHand("P1");
            this.addHandCard({
                playerId: "P1",
                name: "Test Burn Card 1",
                power: 1,
                bulk: 1,
                colors: [CardColor.Red],
            });

            this.addHandCard({
                playerId: "P1",
                name: "Test Burn Card 2",
                power: 2,
                bulk: 1,
                colors: [CardColor.Blue],
            });
        }

        if (options.player2Deck) {

            this.loadDeck(
                "P2",
                options.player2Deck,
            );

            this.drawStartingHand("P2");

        }

    }


    public subscribe(
        listener: GameListener,
    ): () => void {

        this.listeners.add(listener);

        return () => {
            this.listeners.delete(listener);
        };

    }

    private revision = 0;

    public getRevision(): number {
        return this.revision;
    }

    private notify(): void {

        this.revision++;

        console.log(
            "GAME UPDATED:",
            this.revision,
        );

        for (const listener of this.listeners) {
            listener();
        }

    }

    public addHandCard(
        options: TestCardDefinitionOptions & {

            playerId?: string;

        } = {},
    ): CardInstance {

        const playerId =
            options.playerId ?? "P1";

        const card =

            this.createCard(

                playerId,

                options,

            );

        this.getPile(

            PileType.Hand,

            playerId,

        ).cards.push(card);

        this.notify();

        return card;

    }

    public addDeckCard(
        options: TestCardDefinitionOptions & {

            playerId?: string;

        } = {},
    ): CardInstance {

        const playerId =
            options.playerId ?? "P1";

        const card =

            this.createCard(

                playerId,

                options,

            );

        this.getPile(

            PileType.MainDeck,

            playerId,

        ).cards.push(card);

        this.notify();

        return card;

    }

    public addGateCard(
        options: TestCardDefinitionOptions & {

            side: PlayerSide;

            position: BoardPosition;

            ownerId?: string;

        },
    ): CardInstance {

        const ownerId =
            options.ownerId ?? "P1";

        const card =

            this.createCard(

                ownerId,

                options,

            );

        let gate =

            this.state.board.gateZones.find(

                gate =>

                    gate.side === options.side &&

                    gate.position === options.position,

            );

        if (!gate) {

            gate = {

                side: options.side,

                position: options.position,

                stack: {

                    cards: [],

                },

            };

            this.state.board.gateZones.push(

                gate,

            );

        }

        gate.stack ??= {

            cards: [],

        };

        gate.stack.cards.unshift(card);

        this.notify();

        return card;

    }

    public addEmptyGate(
        side: PlayerSide,
        position: BoardPosition,
    ): void {

        const existing =
            this.state.board.gateZones.find(
                gate =>
                    gate.side === side &&
                    gate.position === position,
            );

        if (existing) {
            this.notify();

            return;
        }

        this.state.board.gateZones.push({

            side,

            position,

            stack: null,

        });

        this.notify();

    }

    public reference(
        card: CardInstance,
    ) {

        return {
            id: card.id,
        };

    }

    public gateReference(
        side: PlayerSide,
        position: BoardPosition,
    ): GateReference {

        return {
            locationType: LocationType.Gate,
            side,
            position,
        };

    }

    public playIntent(
        playType: PlayType,
        cards: CardInstance[],
        destination: LocationReference | LocationReference[],
    ): PlayIntent {

        return {

            type: "play",

            player: {

                id: this.player1.id,

            },

            playType,

            cards: cards.map(
                card => this.reference(card),
            ),

            destinations: Array.isArray(destination)
                ? destination
                : [
                    destination,
                ],

        };

    }

    public compilePlay(
        intent: PlayIntent,
    ) {

        return compilePlayIntent(
            this.context,
            intent,
        );

    }

    public play(
        intent: PlayIntent,
    ): void {

        const result =

            this.compilePlay(
                intent,
            );

        if (!result.success) {

            throw new Error(

                result.errors.join("\n") ||

                "Play failed.",

            );

        }

        for (

            const action of result.actions

        ) {

            processAction(

                this.context,

                action,

            );

        }

        processEngine(

            this.context,

        );

        this.notify();

    }

    public cardDefinition(
        card: CardInstance,
    ) {

        return this.context.cardDatabase[
            card.cardId
        ];

    }

    public hand(
        playerId = "P1",
    ): CardInstance[] {

        return this.getPile(

            PileType.Hand,

            playerId,

        ).cards;

    }

    public deck(
        playerId = "P1",
    ): CardInstance[] {

        return this.getPile(

            PileType.MainDeck,

            playerId,

        ).cards;

    }

    public health(
        playerId = "P1",
    ): number {

        const player =

            this.state.players.find(

                player =>

                    player.id === playerId,

            );

        if (!player) {

            throw new Error(

                `Unknown player ${playerId}`,

            );

        }

        return player.health;

    }

    public player(
        id: string,
    ): PlayerState {

        const player =

            this.state.players.find(

                player =>

                    player.id === id,

            );

        if (!player) {

            throw new Error(
                "Player not found.",
            );

        }

        return player;

    }

    public resolveNextAbility(): void {

        const resolution =

            this.context.pendingResolutions.shift();

        if (!resolution) {

            throw new Error(
                "No pending resolutions.",
            );

        }

        processPendingResolution(

            this.context,

            resolution,

        );

        processEngine(

            this.context,

        );

        this.notify();

    }

    public get pendingResolutionCount(): number {

        return this.context.pendingResolutions.length;

    }

    public burn(
        card: CardInstance,
        side: PlayerSide,
        position: BoardPosition,
    ): void {

        this.play(

            this.playIntent(

                PlayType.Burn,

                [card],

                this.gateReference(

                    side,

                    position,

                ),

            ),

        );

    }

    public card(
        cardId: string,
    ): CardInstance | null {

        for (const pile of this.state.piles) {

            const card =
                pile.cards.find(
                    card =>
                        card.id === cardId,
                );

            if (card) {
                return card;
            }

        }

        for (const gate of this.state.board.gateZones) {

            const card =
                gate.stack?.cards.find(
                    card =>
                        card.id === cardId,
                );

            if (card) {
                return card;
            }

        }

        return null;

    }

    public findHand(
        playerId: string,
    ): PileState {

        return this.getPile(

            PileType.Hand,

            playerId,

        );

    }

    public findDeck(
        playerId: string,
    ): PileState {

        return this.getPile(

            PileType.MainDeck,

            playerId,

        );

    }

    private createCard(
        ownerId: string,

        options: TestCardDefinitionOptions = {},

    ): CardInstance {

        const definition =

            createTestCardDefinition(

                options,

            );

        this.context.cardDatabase[
            definition.id
        ] = definition;

        return createTestCardInstance({

            cardId: definition.id,

            ownerId,

        });

    }

    private createPile(
        pileType: PileType,
        ownerId?: string,
    ): PileState {

        return {

            id:
                ownerId
                    ? `${pileType}_${ownerId}`
                    : pileType,

            pileType,

            cards: [],

            ownerId,

        };

    }

    private getPile(
        pileType: PileType,
        ownerId?: string,
    ): PileState {

        const pile =
            this.state.piles.find(
                p =>
                    p.pileType === pileType &&
                    p.ownerId === ownerId,
            );

        if (!pile) {

            throw new Error(
                `Missing pile ${pileType}`,
            );

        }

        return pile;

    }

    private registerTestCardDefinitions(): void {

        for (
            const definition
            of TEST_CARD_DEFINITIONS
        ) {

            this.context.cardDatabase[
                definition.id
            ] = definition;

        }

    }

    private loadDeck(
        playerId: string,
        deck: DeckExport,
    ): void {

        const mainDeck =
            this.getPile(
                PileType.MainDeck,
                playerId,
            );

        const extraDeck =
            this.getPile(
                PileType.ExtraDeck,
                playerId,
            );

        mainDeck.cards = this.createDeckInstances(
            deck.mainDeck,
            playerId,
        );

        extraDeck.cards = this.createDeckInstances(
            deck.extraDeck,
            playerId,
        );

    }

    private createDeckInstances(
        entries: DeckEntry[],
        playerId: string,
    ): CardInstance[] {

        const cards: CardInstance[] = [];

        for (
            const entry
            of entries
        ) {

            const definition =
                this.context.cardDatabase[
                    entry.cardId
                ];

            if (!definition) {

                throw new Error(
                    `Unknown test card: ${entry.cardId}`,
                );

            }

            for (
                let copy = 0;
                copy < entry.count;
                copy++
            ) {

                cards.push(

                    createTestCardInstance({

                        cardId:
                            definition.id,

                        ownerId:
                            playerId,

                    }),

                );

            }

        }

        return cards;

    }

    private drawStartingHand(
        playerId: string,
    ): void {

        const deck =
            this.getPile(
                PileType.MainDeck,
                playerId,
            );

        const hand =
            this.getPile(
                PileType.Hand,
                playerId,
            );

        for (
            let i = 0;
            i < 5;
            i++
        ) {

            const card =
                deck.cards.shift();

            if (!card) {
                break;
            }

            hand.cards.push(card);

        }

    }
}