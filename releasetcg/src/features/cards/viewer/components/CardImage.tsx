import { PlayableCard } from "@/types/cards";
import { getCardImageUrl } from "@/lib/images/getCardImageUrl";

type Props = {
  card: Pick<PlayableCard, "name" | "cardNumber" | "setName">;
};

export function CardImage({ card }: Props) {
  const src = getCardImageUrl(card);

  return (
    <div className="flex justify-center">
      <img
        src={src}
        alt={card.name}
        className="w-full max-w-[340px] rounded-xl shadow-xl object-contain"
      />
    </div>
  );
}