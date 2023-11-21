import { ButtonHTMLAttributes, ReactNode } from "react";
import "./styles.scss";
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};
export function Button({ children, ...props }: ButtonProps) {
  return (
    <button className="gym__button--secondary" {...props}>
      {children}
    </button>
  );
}
