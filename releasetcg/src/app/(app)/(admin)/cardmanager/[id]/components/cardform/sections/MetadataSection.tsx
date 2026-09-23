import { CardForm, UpdateCard } from "../types";
import { CardSection } from "../CardSection";
import { TextInput } from "@/app/(app)/components/fields/TextInput";
import { SelectInput } from "@/app/(app)/components/fields/SelectInput";
import { POOL_OPTIONS } from "../constants";

type Props = {
  form: CardForm;
  update: UpdateCard;
};

export function MetadataSection({ form, update }: Props) {
  return (
    <CardSection title="Metadata">
      <TextInput
        label="Set Name"
        value={form.setName}
        onChange={(value) => update("setName", value)}
      />

      <TextInput
        label="Card Number"
        value={form.cardNumber}
        onChange={(value) => update("cardNumber", value)}
      />

      <TextInput
        label="Artist"
        value={form.artist}
        onChange={(value) => update("artist", value)}
      />

      <SelectInput
        label="Pool"
        value={form.pool}
        options={POOL_OPTIONS}
        onChange={(value) => update("pool", value)}
      />
    </CardSection>
  );
}