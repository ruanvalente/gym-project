import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

type HintProps = DetailedHTMLProps<
  HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
> & {
  children: ReactNode;
};
export function Hint({ children, ...rest }: HintProps) {
  return (
    <span {...rest} className="text-sm mt-2 inline-block text-red-500">
      {children}
    </span>
  );
}
