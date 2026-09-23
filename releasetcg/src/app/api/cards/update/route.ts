import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export async function POST(req: Request) {
  try {
    const { id, data } = await req.json();

    if (!id) {
      return NextResponse.json({ error: "Missing card id" }, { status: 400 });
    }

    const supabase = await createClient();

    const { error } = await supabase
      .from("cards")
      .update({
        Name: data.name,
        Power: data.power,
        Bulk: data.bulk,

        Color1: data.color1 || null,
        Color2: data.color2 || null,
        Color3: data.color3 || null,
        Color4: data.color4 || null,

        Trait: data.trait || null,
        Effect1: data.effect1 || null,
        Effect2: data.effect2 || null,

        Clarify1: data.clarify1 || null,
        Clarify2: data.clarify2 || null,
        Clarify3: data.clarify3 || null,

        Flavor: data.flavor || null,
        Inspiration: data.inspiration || null,

        Artist: data.artist || null,
        CardNumber: data.cardNumber || null,
        SetName: data.setName || null,

        pool: data.pool || null,
      })
      .eq("id", id);

    if (error) {
      console.error(error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}