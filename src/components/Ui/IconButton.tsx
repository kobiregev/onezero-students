import React from "react";

type Props = {
  iconPosition?: "start" | "end";
  text?: string;
  icon: React.ReactNode;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export default function IconButton({
  iconPosition,
  className,
  icon,
  text,
  ...rest
}: Props) {
  const position = iconPosition === "start" ? "flex-row" : "flex-row-reverse";
  const style = `w-fit gap-2  text-base  font-Digibank-Medium  inline-flex py-2.5 px-5 rounded-[33px] items-center ${position}`;
  return (
    <button className={`${style} ${className}  `} {...rest}>
      {icon}
      {text}
    </button>
  );
}
