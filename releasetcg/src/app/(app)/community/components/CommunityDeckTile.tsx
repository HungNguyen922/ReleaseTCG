import Link from "next/link";
import Image from "next/image";

import type { CommunityDeckSummary } from "@/types/community";

import { getCardImageUrl } from "@/lib/images/getCardImageUrl";

type Props = {
  deck: CommunityDeckSummary;
};

export default function CommunityDeckTile({
  deck,
}: Props) {
  return (
    <Link href={`/community/${deck.id}`}>
      <div
        className="
          overflow-hidden
          rounded-xl
          border
          bg-card
          transition-all
          hover:-translate-y-1
          hover:border-primary
          hover:shadow-lg
        "
      >
        <div className="relative h-60 w-full overflow-hidden">
          {/*
            {deck.leaderImage ? (
                <Image
                src={getCardImageUrl(deck.leaderImage)}
                alt={deck.leaderName ?? deck.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-contain"
                />
            ) : (
                <div className="flex h-full items-center justify-center bg-muted text-sm text-muted-foreground">
                No Leader
                </div>
            )}
          */}
        </div>

        <div className="space-y-2 p-4">
          <h2 className="font-semibold">
            {deck.title}
          </h2>

          <div className="flex justify-between text-xs text-muted-foreground">
            <span>{deck.author}</span>

            <span>
              ❤️ {deck.likes} • 💬 {deck.comments}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}