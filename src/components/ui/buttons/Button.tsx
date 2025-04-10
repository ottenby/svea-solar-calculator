import React, { ReactNode } from "react";
import styles from "./buttons.module.scss";

type ButtonProps = {
  onClick?: () => void;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "tertiery";
  children: ReactNode[] | ReactNode;
  type?: "button" | "submit";
};

export const Button = ({
  onClick,
  disabled,
  variant = "primary",
  type,
  children,
}: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={` 
        ${styles.button} 
        ${variant === "primary" && styles.primary} 
        ${variant === "secondary" && styles.secondary}
        ${variant === "tertiery" && styles.tertiery}
        `}
    >
      {children}
    </button>
  );
};
