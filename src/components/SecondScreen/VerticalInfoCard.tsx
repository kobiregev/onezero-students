import React from "react";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

export default function VerticalInfoCard({ className, children }: Props) {
  return <div className={`flex flex-col  text-right  ${className}`}>{children}</div>;
}
