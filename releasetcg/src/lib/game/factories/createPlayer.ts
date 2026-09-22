import {
    PlayerState,
} from "../models";

import {
    CreateGameOptions,
} from "../models/GameOptions";

export function createPlayer(
    player: CreateGameOptions["players"][number],
): PlayerState {

    return {

        id: player.id,

        health: 10,

        leader: player.leader,

        leaderDrawn: false,

    };

}