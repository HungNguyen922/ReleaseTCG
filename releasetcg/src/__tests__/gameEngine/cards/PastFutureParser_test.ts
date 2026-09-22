import {
    parseAbilities,
} from "@/lib/game/abilities/parser";

describe(
    "Past & Future parser",
    () => {

        it(
            "parses abilities from json",
            () => {

                const json = [

                    {

                        trigger: {

                            type: "play",

                        },

                        effects: [

                            {

                                type: "stack",

                                amount: 3,

                            },

                            {

                                type: "booleanChoice",

                                text: "Shuffle the chosen draw pile?",

                            },

                            {

                                type: "shufflePile",

                            },

                            {

                                type: "drawCards",

                                amount: 1,

                            },

                        ],

                    },

                ];

                const abilities =

                    parseAbilities(
                        json,
                    );

                expect(
                    abilities,
                ).toHaveLength(1);

                expect(
                    abilities[0].effects,
                ).toHaveLength(4);

                expect(
                    abilities[0].effects[0].type,
                ).toBe("stack");

                expect(
                    abilities[0].effects[1].type,
                ).toBe("booleanChoice");

                expect(
                    abilities[0].effects[2].type,
                ).toBe("shufflePile");

                expect(
                    abilities[0].effects[3].type,
                ).toBe("drawCards");

            },

        );

    },

);