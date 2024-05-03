import React from "react";
import * as RadioGroup from "@radix-ui/react-radio-group";

type Props = {
  value: string;
  setValue: (val: string) => void;
};

const RadioGroupComponent = ({ value, setValue }: Props) => (
  <>
    <RadioGroup.Root
      className="flex flex-col gap-2.5 my-4"
      defaultValue="default"
      aria-label="View density"
      value={value}
      onValueChange={(val) => setValue(val)}
    >
      <div className="flex items-center">
        <RadioGroup.Item
          className="bg-white w-[25px] h-[25px] rounded-full  outline-none cursor-default border-2 border-indigo-500"
          value="Escrowed"
          id="r3"
        >
          <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-indigo-500" />
        </RadioGroup.Item>
        <label className=" text-[15px] leading-none pl-[15px]" htmlFor="r1">
          Escrowed
        </label>
      </div>
      <div className="flex items-center">
        <RadioGroup.Item
          className="bg-white w-[25px] h-[25px] rounded-full  outline-none cursor-default border-2 border-indigo-500"
          value="Non-escrowed"
          id="r3"
        >
          <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-indigo-500" />
        </RadioGroup.Item>
        <label className=" text-[15px] leading-none pl-[15px]" htmlFor="r2">
          Non-escrowed
        </label>
      </div>
    </RadioGroup.Root>
  </>
);

export default RadioGroupComponent;
