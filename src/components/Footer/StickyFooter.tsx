import React, { useState } from "react";
import IconButton from "../Ui/IconButton";
import leftArrow from "../../assets/icons/arrow-left-white.svg";
import call from "../../assets/icons/call.svg";
import phone from "../../assets/icons/phone.svg";
import Dialog from "../Ui/Dialog";
import QrDialog from "../QrDialog/QrDialog";
import { MIN_DESKTOP_WIDTH } from "../../constants/constants";
type Props = {};

export default function StickyFooter({}: Props) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  function handleClick() {
    if (window.screen.width >= MIN_DESKTOP_WIDTH) {
      setIsDialogOpen(true);
      return;
    }

    //TODO: redirect to app store
  }
  return (
    <>
      <div className="sticky bottom-0 flex w-full items-center justify-between px-3 z-10 bg-white py-2.5 md:py-[1.125rem] drop-shadow-re md:px-[2.5rem]  md:top-0">
        <IconButton
          onClick={handleClick}
          className="self-center text-white bg-blue rounded-3xl py-3 px-6 w-fit font-Digibank-Medium text-base leading-[1.2rem]"
          iconPosition="end"
          text="להתנסות ופתיחת חשבון"
          icon={
            <img
              src={leftArrow}
              className="w-4 h-4 align-baseline"
              alt="חץ שמאלה"
            />
          }
        />
        <p className="hidden md:block  text-darkGrey font-Digibank-Regular text-base">
          חודשים התנסות חינם
        </p>
        <button className=" p-0 flex flex-col items-center gap-2 font-Digibank-Regular text-[0.63rem] leading-none md:leading-3 md:flex-row-reverse md:text-base md:gap-4 ">
          <img className="w-[1.375rem] h-[1.375rem]" src={phone} />
          שיחה עם נציג
        </button>

        {/* <img src={call} alt="שיחה עם נציג" /> */}
      </div>
      <QrDialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
    </>
  );
}
