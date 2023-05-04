import React from "react";

type Props = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

export default function Avatar({ className,  ...rest }: Props) {
  return (
    <img
      className={`inline-block h-12 w-12 rounded-full  ${className}`}
      {...rest}
    ></img>
  );
}
