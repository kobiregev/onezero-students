import React from "react";
import cupOfCouple from "../../assets/mobile-imgs/cup-of-couple.png";
import chatWithRep from "../../assets/mobile-imgs/chat-with-rep.png";
import oneZeroNotification from "../../assets/mobile-imgs/onezero-notification.svg";
import phoneGraph from "../../assets/mobile-imgs/phone-graph.png";

import cupOfCoupleDesk from "../../assets/cup-of-couple.png";
import chatWithRepDesk from "../../assets/chat-with-rep.png";
import oneZeroNotificationDesk from "../../assets/onezero-notification.png";
import phoneGraphDesk from "../../assets/phone-graph.png";
type Props = {};

const cardContainer = "flex flex-col items-center gap-4 md:gap-[11.75rem]";
const cardHeader = "font-Digibank-Medium text-2xl leading-[1.14]  mb-2  md:leading-[2.875rem] md:text-right md:text-[2.5rem] md:mb-8";
const cardParagraph = "opacity-70 text-center leading-[1.19rem] mb-6 md:leading-[1.2]   md:text-2xl md:text-right";
const reversedRow = "md:flex-row-reverse";
const row = "md:flex-row";
const desktopImage = "hidden md:flex h-[23rem] w-[25.125rem] ";
const mobileImage = "md:hidden ";
export default function ThirdScreen({}: Props) {
  return (
    <div className=" font-Digibank-Regular text-center px-5 py-14 flex flex-col gap-11 md:gap-[4.375rem] md:items-center  ">
      <div className={`${cardContainer} ${reversedRow} `}>
        <div>
          <h2 className={cardHeader}>זמינים כשנוח לך - שירות 24/6</h2>
          <p className={cardParagraph}>
            מענה אנושי של בנקאים מקצועיים כאן
            <br />
            בשבילך בצא׳ט או בטלפון בכל שעה לכל שאלה,
            <br />
            בעיה או התייעצות
          </p>
        </div>
        <img className={mobileImage} src={cupOfCouple} alt="ספל קפה" />
        <img className={desktopImage} src={cupOfCoupleDesk} alt="ספל קפה" />
      </div>
      <div className={`${cardContainer} ${row}`}>
        <div>
          <h2 className={cardHeader}>מנהלי כספים ויועצים אישיים</h2>
          <p className={cardParagraph}>
            מלווים אותך ועוזרים לך לנהל ולשמור על הכסף
            <br />
            שלך, מטפלים בכל מה שצריך ונותנים
            <br />
            לך ראש שקט
          </p>
        </div>
        <img className={mobileImage} src={chatWithRep} alt="שיחה עם נציג" />
        <img
          className={desktopImage}
          src={chatWithRepDesk}
          alt="שיחה עם נציג"
        />
      </div>
      <div className={`${cardContainer} ${reversedRow}`}>
        <div>
          <h2 className={cardHeader}>
            מורידים לך את ההתעסקות
            <br />
            בכסף מהראש
          </h2>
          <p className={cardParagraph}>
            מערכת חכמה מבוססת טכנולוגיית AI שסורקת
            <br />
            את החשבון שלך מידי יום ומזהה בעיות בחשבון
            <br />
            או הזדמנויות לצמיחה
          </p>
        </div>
        <img
          className={mobileImage}
          src={oneZeroNotification}
          alt="התראה מ onezero"
        />
        <img
          className={desktopImage}
          src={oneZeroNotificationDesk}
          alt="התראה מ onezero"
        />
      </div>
      <div className={`${cardContainer} ${row}`}>
        <div>
          <h2 className={cardHeader}>
            חשבון הבנק וההשקעות
            <br />
            במקום אחד
          </h2>
          <p className={cardParagraph}>
            מסחר בניירות ערך ישירות מחשבון הבנק,
            <br />
            לא צריך להוריד עוד אפליקציה
          </p>
        </div>
        <img className={mobileImage} src={phoneGraph} alt="שיחה עם נציג" />
        <img className={desktopImage} src={phoneGraphDesk} alt="שיחה עם נציג" />
      </div>
    </div>
  );
}
