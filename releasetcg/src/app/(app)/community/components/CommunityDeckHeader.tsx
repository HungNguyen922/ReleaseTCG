/*
    SOS
    I legit don't remember what this does.
*/
import Image from "next/image";

import type { CommunityDeck } from "@/types/community";

import { getCardImageUrl } from "@/lib/images/getCardImageUrl";

type Props = {
  deck: CommunityDeck;
};

export default function CommunityDeckHeader({
  deck,
}: Props) {
  return (
    <div className="flex flex-col gap-6 rounded-xl border bg-card p-6 lg:flex-row">

      {/* Leader */}
      <div className="relative h-56 w-40 shrink-0 overflow-hidden rounded-lg border">

        {deck.leaderImage ? (
          <Image
            src={getCardImageUrl(deck.leaderImage)}
            alt={deck.leaderName ?? deck.title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
            No Leader
          </div>
        )}

      </div>

      {/* Metadata */}
      <div className="flex flex-1 flex-col justify-between">

        <div className="space-y-3">

          <h1 className="text-3xl font-bold">
            {deck.title}
          </h1>

          <p className="text-muted-foreground">
            by {deck.author}
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">

            <span>
              Leader: {deck.leaderName ?? "None"}
            </span>

            <span>
              ❤️ {deck.likes}
            </span>

            <span>
              💬 {deck.comments}
            </span>

          </div>

        </div>
      </div>
    </div>
  );
}