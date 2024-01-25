"use client";

import React from "react";
import { Button as BaseButton } from "../ui/button";
import classNames from "classnames";

export default function Button({ children, variant, onClick, className }) {
  return (
    <BaseButton
      onClick={onClick}
      variant={variant}
      className={classNames(
        `drop-shadow-sm w-full ${
          variant === "secondary" && "border border-cyan-600"
        }`,
        className
      )}
    >
      {children}
    </BaseButton>
  );
}
