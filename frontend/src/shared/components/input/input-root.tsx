import { ReactNode } from "react";

type InputRootProps = {
  children: ReactNode;
};

export function Root({ children }: InputRootProps) {
  return <>{children}</>;
}
