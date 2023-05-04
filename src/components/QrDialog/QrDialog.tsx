import React from "react";
import Dialog from "../Ui/Dialog";
import qrCode from "../../assets/qr-code.png";
type Props = {
  open?: boolean;
  onClose: () => void;
};

export default function QrDialog({ open, onClose }: Props) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      className="w-fit h-fit items-center justify-center "
    >
      <div className="flex flex-col items-center md:px-24 md:py-6 2xl:px-28 2xl:py-10 gap-6">
        <h2 className="md:text-6xl 2xl:text-7xl" dir="ltr">
          Let's Start!
        </h2>
        <p className="md:text-lg 2xl:text-xl font-Digibank-Regular">
          כמה צעדים לפני פתיחת החשבון, סורקים את
          <br />
          ה - QR Code בטלפון הסלולרי, מורידים את
          <br />
          האפליקציה ותוך כ - 7 דקות יש לכם חשבון.
        </p>
        <img src={qrCode} alt="קוד qr" />
      </div>
    </Dialog>
  );
}
