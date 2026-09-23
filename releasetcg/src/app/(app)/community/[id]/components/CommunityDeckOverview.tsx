import type { PlayableCard } from "@/types/cards";

import CommunityDeckSection, { DisplayCard } from "./CommunityDeckSection";
import CommunityDeckHeader from "./CommunityDeckHeader";
import CardPreviewPopup from "@/app/(app)/components/cards/CardPreviewPopup";

type Props = {
  deckTitle: string;
  author: string;
  coverCard: PlayableCard | null;

  mainDeck: DisplayCard[];
  extraDeck: DisplayCard[];

  hoveredCard: PlayableCard | null;
  hoverAnchor: DOMRect | null;

  setHoveredCardId: (id: string | null) => void;
  setHoverAnchor: (anchor: DOMRect | null) => void;
};

export default function CommunityDeckOverview({
  deckTitle,
  author,
  coverCard,
  mainDeck,
  extraDeck,
  hoveredCard,
  hoverAnchor,
  setHoveredCardId,
  setHoverAnchor,
}: Props) {
  return (
    <div className="relative">
      <div className="space-y-2 rounded-xl border bg-card p-4">
        <section className="rounded-lg p-3">
          <div className="flex gap-4">
            <CommunityDeckHeader
              deckName={deckTitle}
              author={author}
              coverCard={coverCard}
              setHoveredCardId={setHoveredCardId}
              setHoverAnchor={setHoverAnchor}
            />
          </div>
        </section>

        <section className="rounded-lg p-3">
          <CommunityDeckSection
            cards={extraDeck}
            setHoveredCardId={setHoveredCardId}
            setHoverAnchor={setHoverAnchor}
          />
        </section>

        <section className="rounded-lg p-3">
          <CommunityDeckSection
            cards={mainDeck}
            setHoveredCardId={setHoveredCardId}
            setHoverAnchor={setHoverAnchor}
          />
        </section>
      </div>

      <CardPreviewPopup card={hoveredCard} anchor={hoverAnchor} />
    </div>
  );
}