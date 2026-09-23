import { PlayableCard } from "@/types/cards";
import { getCardImageUrl } from "@/lib/images/getCardImageUrl";

type Props = {
  card: PlayableCard;
  onClick: () => void;
};

export function GalleryCard({ card, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer rounded-xl border bg-card shadow transition hover:-translate-y-1 hover:shadow-lg"
    >
      <img
        src={getCardImageUrl(card)}
        alt={card.name}
        className="aspect-[5/7] w-full object-cover"
      />
    </div>
  );
}