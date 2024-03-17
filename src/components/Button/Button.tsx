import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./button.module.css";
export default function Button({
  className,
  children,
  ...otherProps
}: {
  classname?: ButtonHTMLAttributes<HTMLButtonElement>["className"];
  children?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`${styles.button} ${className}`} {...otherProps}>
      {children}
    </button>
  );
}
