import { SectionComponent } from "./components/SectionComponent";
import { CheckboxItem } from "./components/CheckboxItem";
import * as Label from "@radix-ui/react-label";
import SelectComponent from "./components/Select";
import RadioGroupComponent from "./components/RadioGroup";
import { useState } from "react";
import { CheckedState } from "@radix-ui/react-checkbox";

function App() {
  const [borrowers, setBorrowers] = useState<string[]>([]);
  const [name, setName] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [escrowStatus, setEscrowStatus] = useState<string>("");

  const handleCheckBorrowers = (checked: CheckedState, label: string) => {
    const arr = borrowers;
    if (checked) {
      arr.push(label);
    } else {
      const index = arr.findIndex((item) => item === label);
      arr.splice(index, 1);
    }

    setBorrowers(arr);
  };

  console.log(borrowers, name, category, escrowStatus);

  return (
    <div className=" bg-slate-100 h-full justify-center items-center flex flex-col">
      <div className="mb-6 justify-between items-center px-2 bg-white flex w-full">
        <h3 className="my-6 ml-2 text-xl">H3 - Form Title</h3>
        <button className="bg-indigo-100 text-indigo-500 font-bold w-32 h-10 rounded-full">
          Cancel
        </button>
      </div>
      <div className="w-full flex justify-center items-center flex-col mb-24">
        <SectionComponent title={"H2 - Section Title"}>
          <span className="font-semibold">
            Select all borrowers that were impacted by the disaster
          </span>
          <CheckboxItem
            label="Alice J Firstimer"
            onCheckedChange={handleCheckBorrowers}
          />
          <CheckboxItem
            label="Janet P Secondtimer"
            onCheckedChange={handleCheckBorrowers}
          />
          <CheckboxItem
            label="John H Oldtimer"
            onCheckedChange={handleCheckBorrowers}
          />
        </SectionComponent>
        <SectionComponent title="H2 - Section Title">
          <div className="w-full xl:flex flex-row">
            <div className="w-full xl:w-1/2 px-2">
              <Label.Root className="font-bold mb-4" htmlFor="firstName">
                Name
              </Label.Root>
              <input
                className="w-full h-12 border-2 border-slate-500 rounded-lg my-4"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <p className="mb-4">Please fill out the payee's full name</p>
            </div>
            <div className="w-full xl:w-1/2 px-2">
              <Label.Root className="font-bold" htmlFor="firstName">
                Category
              </Label.Root>
              <SelectComponent value={category} onChange={setCategory} />
            </div>
          </div>
        </SectionComponent>
        <SectionComponent title="H2 - Section Title">
          <span className="font-semibold">Escrow status</span>
          <RadioGroupComponent
            value={escrowStatus}
            setValue={setEscrowStatus}
          />
        </SectionComponent>
      </div>
      <div className=" justify-end items-center px-2 bg-white fixed bottom-0 flex flex-row w-full">
        <button className="text-indigo-100 bg-indigo-500 font-bold w-32 h-10 rounded-full my-6">
          Submit
        </button>
      </div>
    </div>
  );
}

export default App;
