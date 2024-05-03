import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

type Props = {
  label: string;
  onCheckedChange: (checked: Checkbox.CheckedState, label: string) => void;
};

export const CheckboxItem = ({ label, onCheckedChange }: Props) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Checkbox.Root
        className="bg-white w-6 h-6 rounded flex justify-center items-center border-2 border-indigo-500/100"
        id="c1"
        onCheckedChange={(checked) => onCheckedChange(checked, label)}
      >
        <Checkbox.Indicator className="CheckboxIndicator">
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <label className="m-4" htmlFor="c1">
        {label}
      </label>
    </div>
  );
};
