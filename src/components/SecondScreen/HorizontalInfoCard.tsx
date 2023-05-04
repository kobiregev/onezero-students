import React from "react";
import Avatar from "../Ui/Avatar";

type Props = {
  src: string;
  children: React.ReactNode;
  className?: string;
};

export default function HorizontalInfoCard({
  children,
  src,
  className,
}: Props) {
  return (
    <div className={`flex gap-4 w-full items-center ${className}`}>
      <Avatar src={src} className="w-16 h-16 object-contain" />
      <div>{children}</div>
    </div>
  );
}
