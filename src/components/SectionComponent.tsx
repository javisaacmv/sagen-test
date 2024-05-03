import React from "react";

type Props = {
  title: string;
  children: React.ReactNode;
};

export const SectionComponent = ({ title, children }: Props) => {
  return (
    <div className="bg-white p-8 w-128 px-8 rounded mb-4">
      <h2 className="text-2xl mb-4">{title}</h2>
      {children}
    </div>
  );
};
