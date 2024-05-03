import React from "react";
import * as Select from "@radix-ui/react-select";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";

type Props = {
  value: string;
  onChange: (val: string) => void;
};

const SelectComponent = ({ value, onChange }: Props) => (
  <Select.Root value={value} onValueChange={(val) => onChange(val)}>
    <Select.Trigger
      className="inline-flex items-center justify-between text-md leading-none  bg-white w-full p-4 h-12 border-2 border-slate-500 rounded-lg my-4 text-slate-500"
      aria-label="Food"
    >
      <Select.Value placeholder="Select a Category" />
      <Select.Icon className="SelectIcon">
        <ChevronDownIcon />
      </Select.Icon>
    </Select.Trigger>
    <Select.Portal>
      <Select.Content className="overflow-hidden bg-white rounded-md">
        <Select.ScrollUpButton className="SelectScrollButton">
          <ChevronUpIcon />
        </Select.ScrollUpButton>
        <Select.Viewport className="p-3">
          <Select.Group>
            <SelectItem value="A">A</SelectItem>
            <SelectItem value="B">B</SelectItem>
            <SelectItem value="C">C</SelectItem>
          </Select.Group>
        </Select.Viewport>
        <Select.ScrollDownButton className="SelectScrollButton">
          <ChevronDownIcon />
        </Select.ScrollDownButton>
      </Select.Content>
    </Select.Portal>
  </Select.Root>
);

const SelectItem = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <Select.Item
        {...props}
        ref={forwardedRef}
        className="text-md leading-none rounded-sm flex items-center h-6 relative select-none py-4"
      >
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className="SelectItemIndicator">
          <CheckIcon />
        </Select.ItemIndicator>
      </Select.Item>
    );
  }
);

export default SelectComponent;
