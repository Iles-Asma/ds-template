import type { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";
import classes from "./button.module.css";

export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  children?: React.ReactNode;
  variant?: "default" | "outlined";
}

export const Button = ({
  className,
  children,
  variant,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        classes["ds-button"],
        classes[`ds-button--${variant}`],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
