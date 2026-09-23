import { CardForm, UpdateCard } from "../types";
import { CardSection } from "../CardSection";
import { TextAreaInput } from "@/app/(app)/components/fields/TextAreaInput";
import { TextInput } from "@/app/(app)/components/fields/TextInput";

type Props = {
  form: CardForm;
  update: UpdateCard;
};

export function CardTextSection({ form, update }: Props) {
  return (
    <CardSection title="Card Text">
      <TextInput
        label="Trait"
        value={form.trait}
        onChange={(value) => update("trait", value)}
      />

      <TextAreaInput
        rows={5}
        placeholder="Effect 1"
        value={form.effect1}
        onChange={(value) => update("effect1", value)}
      />

      <TextAreaInput
        rows={5}
        placeholder="Effect 2"
        value={form.effect2}
        onChange={(value) => update("effect2", value)}
      />

      <TextAreaInput
        rows={2}
        placeholder="Clarify 1"
        value={form.clarify1}
        onChange={(value) => update("clarify1", value)}
      />

      <TextAreaInput
        rows={2}
        placeholder="Clarify 2"
        value={form.clarify2}
        onChange={(value) => update("clarify2", value)}
      />

      <TextAreaInput
        rows={2}
        placeholder="Clarify 3"
        value={form.clarify3}
        onChange={(value) => update("clarify3", value)}
      />

      <TextAreaInput
        rows={3}
        placeholder="Flavor Text"
        value={form.flavor}
        onChange={(value) => update("flavor", value)}
      />

      <TextAreaInput
        rows={3}
        placeholder="Inspiration"
        value={form.inspiration}
        onChange={(value) => update("inspiration", value)}
      />
    </CardSection>
  );
}