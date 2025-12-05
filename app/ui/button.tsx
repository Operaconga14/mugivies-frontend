"use client";

import { ButtonProps } from "../props/buttonProps";

export default function Button({
  text,
  classname,
  onClick,
  type,
}: ButtonProps) {
  return (
    <button type={type} className={classname} onClick={onClick}>
      {text}
    </button>
  );
}
