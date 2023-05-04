import React, { ReactEventHandler, useState } from "react";

type Props = {
  summary?: React.ReactNode;
  details?: React.ReactNode;
  className?:string;
};

export default function Accordion({ summary, details,className }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  function handleToggle(
    event: React.SyntheticEvent<HTMLDetailsElement, Event>
  ) {
    setIsOpen((prevState) => !prevState);
  }
  const marker = isOpen ? "-" : "+";
  return (
    <details
      onToggle={handleToggle}
      open={isOpen}
      className={`border-b-[1px] w-full py-8 ${className}`}
    >
      <summary className="cursor-pointer font-Digibank-Regular text- flex justify-between text-base leading-6 select-none md:text-2xl 3xl:text-3xl">
        {summary}
        <span className="text-xl font-Digibank-Regular" id="marker">
          {marker}
        </span>
      </summary>
      <div className="font-Digibank-Regular text-base leading-[1.38rem] my-3 md:text-xl 3xl:text-2xl md:text-midGrey">
        {details}
      </div>
    </details>
  );
}
