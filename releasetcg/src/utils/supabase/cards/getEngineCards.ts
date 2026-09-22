import { createClient } from "@/utils/supabase/server";

import {
    DatabaseCard,
} from "@/types/cards";


export async function getEngineCards(): Promise<DatabaseCard[]> {

    const supabase =
        await createClient();


    const {
        data,
        error,
    } =
        await supabase
            .from("cards")
            .select("*");


    if (error || !data) {

        console.error(error);

        return [];

    }


    return data as DatabaseCard[];

}