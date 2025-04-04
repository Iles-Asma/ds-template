import type { HTMLAttributes, ReactNode } from "react";
import { clsx } from "clsx";
import styles from "./text.module.css";

export const textTags = ["p", "h3", "h1"] as const;
type TextTag = (typeof textTags)[number];

export interface TextProps extends HTMLAttributes<HTMLElement> {
  /**
   * HTML tag in which your Text component will be rendered
   */
  as?: TextTag;
  /**
   * Inner content of the text
   */
  children?: ReactNode;
}

export const Text = ({
  as: Tag = "p",
  children,
  className,
  ...props
}: TextProps) => {
  const classes = clsx(styles["ds-text"], className);

  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  );
};

Text.displayName = "Text";
