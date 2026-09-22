import {
    PileReference,
} from "@/lib/game/refs";

export interface DrawRequest {

    amount: number;

    availablePiles: PileReference[];

}