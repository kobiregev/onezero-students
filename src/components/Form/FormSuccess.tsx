import React from "react";

type Props = {};

export default function FormSuccess({}: Props) {
  return (
    <div className="flex flex-col gap-2 ">
      <h2 className="font-Digibank-Regular text-2xl md:leading-[1.25]  md:text-[2.5rem] 2xl:text-[2.5rem] whitespace-nowrap">
        מעולה! קיבלנו את הפרטים שלך
        <br />
        ונציג שלנו ייצור איתך קשר.
      </h2>
      <p className=" font-Digibank-Regular opacity-70 leading-5 text-base md:leading-[1.25] md:text-xl 2xl:text-xl">
        בינתיים אפשר ללמוד עוד על המסלולים
        <br />
        והשירותים שלנו
      </p>
      <p className="font-Digibank-Regular opacity-70 underline text-base md:text-2xl">לפירוט המסלולים המלא</p>
    </div>
  );
}
