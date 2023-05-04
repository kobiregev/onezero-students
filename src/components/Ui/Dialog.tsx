import React from "react";
import { createPortal } from "react-dom";

type Props = React.DetailedHTMLProps<
  React.DialogHTMLAttributes<HTMLDialogElement>,
  HTMLDialogElement
> & {
  onClose?: () => void;
};

export default function Dialog({ onClose, open, children, className }: Props) {
  return createPortal(
    open && (
      <dialog
        className={`fixed z-50 top-0 flex flex-col items-center justify-center w-full h-screen bg-backdrop `}
        open={open}
      >
        <div className="flex flex-col bg-white">
          <span onClick={onClose} className="cursor-pointer self-end px-4 py-2 text-lg 2xl:text-xl">&#x2715;</span>
          <div className={` ${className}`}>{children}</div>
        </div>
      </dialog>
    ),
    document.body
  );
}
