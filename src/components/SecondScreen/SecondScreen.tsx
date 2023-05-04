import React from "react";
import Office from "../../assets/mobile-imgs/onezero-office.png";
import Ball from "../../assets/mobile-imgs/onezero-ball.png";
import Card from "../../assets/mobile-imgs/onezero-card.png";
import cardDesktop from "../../assets/onzero-card.png";
import pikadon from "../../assets/pikadon.png";
import loan from "../../assets/loan.png";
import HorizontalInfoCard from "./HorizontalInfoCard";
import VerticalInfoCard from "./VerticalInfoCard";
type Props = {};

const infoCardHeader =
  "leading-none font-Digibank-Medium text-xl mb-1 pr-2 md:text-2xl 3xl:text-3xl";
const infoCardText =
  "font-Digibank-Regular text-black opacity-70 text-base leading-none pr-2 md:opacity-100 md:text-darkGrey md:p-none md:text-[1.38rem]";
const cardImage = "w-[18.375rem] h-[17.065rem] 3xl:w-96  3xl:h-fit  scale-x-[1.15] ";
export default function SecondScreen({}: Props) {
  return (
    <div className=" bg-grey text-black px-5 pt-14 pb-10 flex flex-col gap-12 ">
      <h2 className="text-center font-Digibank-Regular text-2xl leading-[1.10] md:text-4xl	">
        מעל{" "}
        <span className="text-2xl font-Digibank-Apparat-Book leading-none md:text-4xl">
          50,000
        </span>{" "}
        לקוחות הצטרפו,
        <br />
        ונהנים מתנאים מעולים. מה איתך?
      </h2>
      <HorizontalInfoCard className="md:hidden" src={Card}>
        <h3 className={infoCardHeader}>0% המרת מט״ח</h3>
        <p className={infoCardText}>
          ברכישות אונליין ובחופשות בחו״ל.
          <br />
          ללא דמי כרטיס
        </p>
      </HorizontalInfoCard>
      <HorizontalInfoCard className="md:hidden" src={Ball}>
        <h3 className={infoCardHeader}>
          4.25% פיקדון בריבית
          <br />
          שנתית משתנה
        </h3>
        <p className={infoCardText}>
          גם כשהריבית עולה, ללא מינימום.
          <br />
          הפקדון המשתלם בישראל
        </p>
      </HorizontalInfoCard>
      <HorizontalInfoCard className="md:hidden" src={Office}>
        <h3 className={infoCardHeader}>ההלוואה מריבית פריים בלבד</h3>
        <p className={infoCardText}>
          עד ₪200,000 בפריסה של עד
          <br />
          72 תשלומים
        </p>
      </HorizontalInfoCard>

      <div className="hidden md:flex justify-evenly">
        <VerticalInfoCard>
          <img className={cardImage} src={cardDesktop} alt="" />
          <h3 className={infoCardHeader}>0% המרת מט״ח</h3>
          <p className={infoCardText}>
            ברכישות אונליין ובחופשות בחו״ל.
            <br />
            ללא דמי כרטיס
          </p>
        </VerticalInfoCard>
        <VerticalInfoCard>
          <img className={cardImage} src={pikadon} alt="" />
          <h3 className={infoCardHeader}>
            4.25% פיקדון בריבית
            <br />
            שנתית משתנה
          </h3>
          <p className={infoCardText}>
            הפקדון המשתלם בישראל, מתעדכן עם
            <br />
            שינויי הריבית במשק. ללא מינימום
            <br />
            הפקדה.
          </p>
        </VerticalInfoCard>
        <VerticalInfoCard>
          <img className={cardImage} src={loan} alt="" />
          <h3 className={infoCardHeader}>ההלוואה מריבית פריים בלבד</h3>
          <p className={infoCardText}>
            עד ₪200,000 בפריסה של עד
            <br />
            72 תשלומים
          </p>
        </VerticalInfoCard>
      </div>
    </div>
  );
}
